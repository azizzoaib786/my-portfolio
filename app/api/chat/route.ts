import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json()

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'AI service not configured' }, { status: 500 })
    }

    // Load context.md
    const contextPath = path.join(process.cwd(), 'public', 'context.md')
    const context = fs.readFileSync(contextPath, 'utf-8')

    const systemPrompt = `You are an AI assistant on Aziz Zoaib's personal portfolio website. Your job is to answer questions about Aziz in a helpful, professional and friendly tone.

Only answer questions based on the information provided below. If asked something not covered, say you don't have that information but suggest the visitor contact Aziz directly at me@azizzoaib.com.

Keep answers concise (2-4 sentences unless detail is specifically requested). Do not make up information.

--- CONTEXT ABOUT AZIZ ZOAIB ---
${context}
--- END CONTEXT ---`

    const messages = [
      ...(history || []),
      { role: 'user', content: message }
    ]

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [{ role: 'system', content: systemPrompt }, ...messages],
        max_tokens: 400,
        temperature: 0.6
      })
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('Groq error:', err)
      return NextResponse.json({ error: 'AI service error' }, { status: 500 })
    }

    const data = await response.json()
    const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.'

    return NextResponse.json({ reply })
  } catch (err) {
    console.error('Chat error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
