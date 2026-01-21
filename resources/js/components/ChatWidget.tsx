import React, { useState } from 'react';

type Message = { id: string; from: 'user' | 'bot'; text: string };

export default function ChatWidget({ serverMode = false }: { serverMode?: boolean }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', from: 'bot', text: 'Hi — I can help with questions about my projects or availability.' },
  ]);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!value.trim()) return;
    const userMsg: Message = { id: String(Date.now()), from: 'user', text: value.trim() };
    setMessages((m) => [...m, userMsg]);
    setValue('');
    if (!serverMode) {
      // local demo bot: canned/echo response
      setLoading(true);
      setTimeout(() => {
        setMessages((m) => [...m, { id: String(Date.now() + 1), from: 'bot', text: `Thanks — I got: "${userMsg.text}". I'm open to internships & collaborations.` }]);
        setLoading(false);
      }, 700);
      return;
    }

    // server mode: POST to /api/chat (Laravel controller proxy to OpenAI)
    try {
      setLoading(true);
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: 'You are a friendly portfolio assistant for Jonathan.' },
            ...messages.map((m) => ({ role: m.from === 'user' ? 'user' : 'assistant', content: m.text })),
            { role: 'user', content: userMsg.text },
          ],
        }),
      });
      const json = await res.json();
      // Expecting OpenAI-like answer in json.choices[0].message.content
      const botText = json?.choices?.[0]?.message?.content ?? json?.message ?? 'Sorry, no reply.';
      setMessages((m) => [...m, { id: String(Date.now() + 2), from: 'bot', text: String(botText) }]);
    } catch (e) {
      setMessages((m) => [...m, { id: String(Date.now() + 2), from: 'bot', text: 'Sorry, something went wrong.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <div className="fixed right-6 bottom-6 z-50">
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg dark:bg-black/80 dark:text-white"
        >
          <span className="h-5 w-5 rounded-full bg-slate-900 text-white flex items-center justify-center">💬</span>
          <span className="text-sm font-medium">Chat</span>
        </button>
      </div>

      {/* Modal / Panel */}
      {open && (
        <div className="fixed right-6 bottom-20 z-50 w-80 md:w-96">
          <div className="rounded-xl border border-gray-800 bg-white p-4 shadow-lg dark:bg-black/80 dark:border-gray-700">
            <div className="mb-2 flex items-center justify-between">
              <strong className="text-sm">Chat with Jonathan</strong>
              <button onClick={() => setOpen(false)} className="text-sm text-gray-500">Close</button>
            </div>

            <div className="max-h-64 overflow-auto space-y-3 pb-2">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`${m.from === 'user' ? 'bg-rose-600 text-white' : 'bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100'} rounded-lg px-3 py-2 text-sm max-w-[80%]`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && <div className="text-sm text-gray-500">Thinking… </div>}
            </div>

            <div className="mt-3 flex gap-2">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') send(); }}
                placeholder="Ask about projects or availability…"
                className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm dark:bg-transparent dark:border-gray-700"
              />
              <button onClick={send} className="rounded-lg bg-rose-600 px-3 py-2 text-sm text-white hover:bg-rose-500">
                Send
              </button>
            </div>

            <p className="mt-2 text-xs text-gray-400">Demo mode by default. Enable serverMode to call your API.</p>
          </div>
        </div>
      )}
    </>
  );
}