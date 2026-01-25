import React, { useState } from 'react';
import { Database, FileText, Brain, Shield, Play, Settings2, Plus, ArrowRight, Loader2, MessageSquare } from 'lucide-react';
import { generateRAGResponse } from '../services/geminiService';

export const WorkflowBuilder: React.FC = () => {
  // Demo State
  const [selectedSource, setSelectedSource] = useState('Google Drive');
  const [selectedChunking, setSelectedChunking] = useState('Semantic (512)');
  const [selectedModel, setSelectedModel] = useState('Gemini 2.5 Flash');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Playground State
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleTestRun = async () => {
    if (!query) return;
    setIsGenerating(true);
    const result = await generateRAGResponse(query);
    setResponse(result);
    setIsGenerating(false);
  };

  const PipelineNode = ({ title, icon: Icon, value, color }: any) => (
    <div className={`relative p-4 bg-white rounded-xl border-2 ${color} shadow-sm w-full md:w-64 transition-all duration-300 hover:shadow-md`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-lg ${color.replace('border-', 'bg-').replace('200', '100')}`}>
          <Icon className="h-5 w-5 text-slate-700" />
        </div>
        <h3 className="font-semibold text-slate-800 text-sm">{title}</h3>
      </div>
      <div className="text-xs font-mono bg-slate-50 p-2 rounded border border-slate-100 text-slate-600 truncate">
        {value}
      </div>
      {/* Connector Line (Desktop) */}
      <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10">
        <ArrowRight className="text-slate-300" />
      </div>
    </div>
  );

  return (
    <section id="demo" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Build your pipeline visually</h2>
          <p className="mt-4 text-lg text-slate-600">Configure your connectors, processing logic, and models in our interactive canvas.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Toolbar */}
          <div className="bg-slate-50 border-b border-slate-200 p-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex space-x-2">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-md text-sm font-medium text-slate-700 shadow-sm">
                <Settings2 className="h-4 w-4" />
                <span>Blueprint: Internal Wiki</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-md text-sm font-medium text-slate-700 shadow-sm">
                <Shield className="h-4 w-4 text-green-600" />
                <span>ACL Sync: On</span>
              </div>
            </div>
            
            <button 
              onClick={() => setIsProcessing(!isProcessing)}
              className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
              {isProcessing ? 'Syncing Index...' : 'Run Indexing'}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px]">
            {/* Sidebar Configuration */}
            <div className="p-6 border-r border-slate-200 bg-slate-50/50">
              <h3 className="font-semibold text-slate-900 mb-6">Pipeline Configuration</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Data Source</label>
                  <select 
                    value={selectedSource}
                    onChange={(e) => setSelectedSource(e.target.value)}
                    className="w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 text-sm py-2 px-3 bg-white"
                  >
                    <option>Google Drive</option>
                    <option>Notion</option>
                    <option>Confluence</option>
                    <option>Zendesk</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Chunking Strategy</label>
                  <select 
                    value={selectedChunking}
                    onChange={(e) => setSelectedChunking(e.target.value)}
                    className="w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 text-sm py-2 px-3 bg-white"
                  >
                    <option>Semantic (512)</option>
                    <option>Fixed Size (1024)</option>
                    <option>Recursive Character</option>
                    <option>Agentic Splitting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Embedding & LLM</label>
                  <select 
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 text-sm py-2 px-3 bg-white"
                  >
                    <option>Gemini 2.5 Flash</option>
                    <option>Gemini 1.5 Pro</option>
                    <option>OpenAI text-3-large</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500 mb-2">Permissions</p>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <input type="checkbox" checked readOnly className="rounded text-brand-600 focus:ring-brand-500" />
                    <span>Propagate Source ACLs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Canvas */}
            <div className="col-span-1 lg:col-span-2 p-8 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-10 bg-slate-50 relative">
               
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-full">
                
                {/* Node 1: Source */}
                <PipelineNode 
                  title="Connect" 
                  icon={Database} 
                  value={selectedSource}
                  color="border-blue-200"
                />

                {/* Node 2: Processing */}
                <PipelineNode 
                  title="Chunk & Process" 
                  icon={FileText} 
                  value={selectedChunking}
                  color="border-purple-200"
                />

                 {/* Node 3: Model */}
                 <div className={`relative p-4 bg-white rounded-xl border-2 border-green-200 shadow-sm w-full md:w-64 transition-all duration-300 hover:shadow-md`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-green-100">
                      <Brain className="h-5 w-5 text-slate-700" />
                    </div>
                    <h3 className="font-semibold text-slate-800 text-sm">LLM Gateway</h3>
                  </div>
                  <div className="text-xs font-mono bg-slate-50 p-2 rounded border border-slate-100 text-slate-600 truncate">
                    {selectedModel}
                  </div>
                </div>
              </div>
              
              {/* Floating Action Button */}
              <div className="absolute bottom-6 right-6">
                <button className="p-3 bg-white rounded-full shadow-lg border border-slate-200 hover:bg-slate-50 text-slate-600">
                  <Plus className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Playground / Test Section */}
          <div className="border-t border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-brand-600" />
              Test Your Pipeline
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text"
                placeholder="Ask a question about PipeRAG (e.g., 'What is the pricing model?')"
                className="flex-1 rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleTestRun()}
              />
              <button 
                onClick={handleTestRun}
                disabled={isGenerating || !query}
                className="bg-brand-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-w-[120px] flex justify-center items-center"
              >
                {isGenerating ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Generate'}
              </button>
            </div>

            {response && (
              <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200 animate-fade-in">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2 tracking-wider">Generated Answer</p>
                <div className="prose prose-sm max-w-none text-slate-800">
                  {response}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold">Citations:</span>
                  <span className="bg-white px-2 py-1 rounded border border-slate-200">Business Plan: Section 6</span>
                  <span className="bg-white px-2 py-1 rounded border border-slate-200">Executive Summary</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};