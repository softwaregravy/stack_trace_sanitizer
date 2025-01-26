import React, { useState, useEffect } from 'react';
import { ClipboardCopy, Github } from 'lucide-react';

function App() {
  const [username, setUsername] = useState('');
  const [replacement, setReplacement] = useState('username');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  // Load saved values from cookies on mount
  useEffect(() => {
    const savedUsername = getCookie('username') || '';
    const savedReplacement = getCookie('replacement') || 'username';
    setUsername(savedUsername);
    setReplacement(savedReplacement);
  }, []);

  // Save values to cookies when they change
  useEffect(() => {
    if (username) setCookie('username', username, 365);
    if (replacement) setCookie('replacement', replacement, 365);
  }, [username, replacement]);

  // Cookie utilities
  function setCookie(name: string, value: string, days: number) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  function getCookie(name: string): string {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || '';
    return '';
  }

  // Handle input changes and sanitize output
  const handleInputChange = (value: string) => {
    setInput(value);
    if (username) {
      const sanitized = value.replaceAll(username, replacement);
      setOutput(sanitized);
    } else {
      setOutput(value);
    }
  };

  // Copy output to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Stack Trace Username Sanitizer</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Your Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your system username"
              />
            </div>
            <div>
              <label htmlFor="replacement" className="block text-sm font-medium text-gray-700 mb-1">
                Replace With
              </label>
              <input
                type="text"
                id="replacement"
                value={replacement}
                onChange={(e) => setReplacement(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="username"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="input" className="block text-sm font-medium text-gray-700 mb-1">
                Input Stack Trace
              </label>
              <textarea
                id="input"
                value={input}
                onChange={(e) => handleInputChange(e.target.value)}
                className="w-full h-48 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Paste your stack trace here..."
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="output" className="block text-sm font-medium text-gray-700">
                  Sanitized Output
                </label>
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center px-3 py-1 text-sm text-gray-600 hover:text-gray-900"
                >
                  <ClipboardCopy className="w-4 h-4 mr-1" />
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <textarea
                id="output"
                value={output}
                readOnly
                className="w-full h-48 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
                placeholder="Sanitized output will appear here..."
              />
            </div>
          </div>
        </div>

        <div className="mt-4 text-center space-y-2">
          <div>
            <a 
              href="https://softwaregravy.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Built by Softwaregravy
            </a>
          </div>
          <div>
            <a
              href="https://github.com/softwaregravy/stack_trace_sanitizer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 text-sm"
            >
              <Github className="w-4 h-4 mr-1" />
              Open Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;