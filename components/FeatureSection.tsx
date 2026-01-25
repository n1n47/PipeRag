import React from 'react';
import { Lock, GitBranch, Zap, Users, BarChart3, Database } from 'lucide-react';

export const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: GitBranch,
      title: 'Modular Workflow Nodes',
      description: 'Drag-and-drop ingestion, chunking, and retrieval nodes. Build pipelines like Lego blocks, not spaghetti code.'
    },
    {
      icon: Lock,
      title: 'Security-by-Design',
      description: 'ACLs propagate from source to vector store. Permissions are enforced at query time, preventing data leaks.'
    },
    {
      icon: Users,
      title: 'Native Multi-tenancy',
      description: 'Built for SaaS vendors and large orgs. Isolate data via silos or namespaces with a single config switch.'
    },
    {
      icon: Zap,
      title: 'Pre-built Blueprints',
      description: 'Deploy an "Internal Wiki Assistant" or "Support Copilot" in minutes using production-ready templates.'
    },
    {
      icon: BarChart3,
      title: 'Evaluation Harness',
      description: 'Regression testing for your RAG. Measure retrieval precision and generation quality automatically.'
    },
    {
      icon: Database,
      title: 'Managed Vector Ops',
      description: 'We handle the vector database abstraction. Switch between Pinecone, Milvus, or Weaviate without code changes.'
    }
  ];

  return (
    <section id="product" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Platform Capabilities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to ship reliable RAG
          </p>
          <p className="mt-4 text-lg text-slate-600">
            PipeRAG solves the "last mile" problem of AI engineering. We productize the glue code so you can focus on the value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors">
              <div className="p-3 bg-white rounded-xl w-fit shadow-sm border border-slate-100 mb-4">
                <feature.icon className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};