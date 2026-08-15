'use client';

import React, { useState } from 'react';
import { interestNodes } from '@/data/interests';
import { projects } from '@/data/projects';
import { experiments } from '@/data/experiments';
import { articles } from '@/data/articles';
import { SectionHeader } from '../ui/SectionHeader';
import { cn } from '@/lib/utils';
import { Network, Database, Brain, Settings } from 'lucide-react';

interface CoordNode {
  id: string;
  label: string;
  x: number;
  y: number;
  connections: string[];
  description: string;
}

// Preset viewBox positions for nodes inside 800x420 viewport
const nodeCoordinates: Record<string, { x: number; y: number }> = {
  ai: { x: 180, y: 160 },
  data: { x: 140, y: 320 },
  systems: { x: 320, y: 80 },
  finance: { x: 380, y: 340 },
  ml: { x: 360, y: 200 },
  dl: { x: 540, y: 160 },
  cv: { x: 660, y: 260 },
  robotics: { x: 520, y: 70 },
  autonomous: { x: 680, y: 80 },
  strategy: { x: 620, y: 340 }
};

export const InterestGraph: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string | null>('ai');

  // Filter projects/experiments/thinking associated with active node
  const getAssociatedContent = (nodeId: string) => {
    const associatedProjects = projects.filter(p => {
      if (nodeId === 'ai') return p.category.includes('AI');
      if (nodeId === 'data') return p.category.includes('DATA');
      if (nodeId === 'finance') return p.category.includes('FINANCE');
      if (nodeId === 'systems') return p.category.includes('SYSTEMS') || p.category.includes('ROBOTICS');
      if (nodeId === 'ml' || nodeId === 'dl') return p.category.includes('AI') && p.title.toLowerCase() !== 'computer vision';
      if (nodeId === 'cv') return p.title.toLowerCase().includes('vision');
      if (nodeId === 'robotics' || nodeId === 'autonomous') return p.category.includes('ROBOTICS');
      return false;
    });

    const associatedExperiments = experiments.filter(e => {
      const cat = e.category.toLowerCase();
      if (nodeId === 'ai') return cat.includes('ai') || cat.includes('learning');
      if (nodeId === 'data') return cat.includes('machine') || cat.includes('deep');
      if (nodeId === 'finance') return cat.includes('finance');
      if (nodeId === 'systems') return cat.includes('systems') || cat.includes('ros') || cat.includes('robot');
      if (nodeId === 'ml') return cat.includes('machine');
      if (nodeId === 'dl') return cat.includes('deep');
      if (nodeId === 'cv') return cat.includes('vision');
      if (nodeId === 'robotics') return cat.includes('robot') || cat.includes('ros');
      if (nodeId === 'autonomous') return cat.includes('ros') || cat.includes('robot');
      return false;
    });

    const associatedArticles = articles.filter(a => {
      const cat = a.category.toLowerCase();
      if (nodeId === 'ai') return cat.includes('ai');
      if (nodeId === 'data') return cat.includes('data');
      if (nodeId === 'finance') return cat.includes('finance');
      if (nodeId === 'strategy') return cat.includes('strategy');
      if (nodeId === 'systems') return cat.includes('systems');
      return false;
    });

    return {
      projects: associatedProjects,
      experiments: associatedExperiments,
      articles: associatedArticles
    };
  };

  const activeNode = interestNodes.find(n => n.id === activeNodeId);
  const associated = activeNodeId ? getAssociatedContent(activeNodeId) : null;

  return (
    <div>
      <SectionHeader
        title="INTEREST GRAPH"
        idCode="SYS_SUB_MODULE // GRAPH.EXE"
        description="Interactive visualization of technical relationships, study domains, and related project nodes."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: SVG Network Diagram */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="retro-bevel-in bg-retro-cream p-4 relative overflow-hidden select-none w-full flex items-center justify-center">
            
            {/* Blueprint Grid Lines Overlay */}
            <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

            <svg
              viewBox="0 0 800 420"
              className="w-full h-auto relative z-10 max-w-[640px] lg:max-w-none"
            >
              <defs>
                {/* SVG patterns or grids */}
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="18"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--color-retro-border)" />
                </marker>
              </defs>

              {/* DRAW CONNECTIONS (Lines) */}
              {interestNodes.map((sourceNode) => {
                const sourceCoord = nodeCoordinates[sourceNode.id];
                if (!sourceCoord) return null;

                return sourceNode.connections.map((targetId) => {
                  const targetCoord = nodeCoordinates[targetId];
                  if (!targetCoord) return null;

                  const isHighlighted =
                    activeNodeId === sourceNode.id || activeNodeId === targetId;

                  return (
                    <line
                      key={`${sourceNode.id}-${targetId}`}
                      x1={sourceCoord.x}
                      y1={sourceCoord.y}
                      x2={targetCoord.x}
                      y2={targetCoord.y}
                      stroke={
                        isHighlighted
                          ? 'var(--color-retro-green)'
                          : 'var(--color-retro-border)'
                      }
                      strokeWidth={isHighlighted ? 1.8 : 0.8}
                      strokeDasharray={isHighlighted ? '0' : '4 3'}
                      opacity={isHighlighted ? 0.95 : 0.4}
                      className="transition-all duration-150"
                    />
                  );
                });
              })}

              {/* DRAW NODES (Circles + Text Labels) */}
              {interestNodes.map((node) => {
                const coord = nodeCoordinates[node.id];
                if (!coord) return null;

                const isActive = activeNodeId === node.id;
                const isConnected =
                  activeNode?.connections.includes(node.id) ||
                  node.connections.includes(activeNodeId || '');

                return (
                  <g
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    className="cursor-pointer group"
                  >
                    {/* Node Hover Circle Ring */}
                    <circle
                      cx={coord.x}
                      cy={coord.y}
                      r={isActive ? 16 : 10}
                      fill="var(--color-retro-cream)"
                      stroke={
                        isActive
                          ? 'var(--color-retro-green)'
                          : isConnected
                          ? 'var(--color-retro-green-light)'
                          : 'var(--color-retro-border)'
                      }
                      strokeWidth={isActive ? 2 : 1}
                      className="transition-all duration-150 group-hover:scale-110"
                    />
                    
                    {/* Center Core dot */}
                    <circle
                      cx={coord.x}
                      cy={coord.y}
                      r={3}
                      fill={isActive ? 'var(--color-retro-green)' : 'var(--color-retro-charcoal)'}
                      opacity={isActive ? 1 : 0.6}
                    />

                    {/* Text Label */}
                    <text
                      x={coord.x}
                      y={coord.y + 24}
                      textAnchor="middle"
                      className={cn(
                        "font-pixel text-[11px] tracking-wider select-none transition-all duration-150 fill-retro-charcoal",
                        isActive ? "font-bold fill-retro-green translate-y-0.5" : "opacity-75 group-hover:opacity-100"
                      )}
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right Side: Specifications Registry Inspector */}
        <div className="lg:col-span-5 flex">
          <div className="retro-bevel-out bg-retro-cream p-5 flex flex-col justify-between w-full">
            <div>
              {/* Header */}
              <div className="border-b border-retro-border pb-3 mb-4 flex items-center justify-between">
                <span className="font-pixel text-sm text-retro-amber uppercase flex items-center gap-1.5">
                  <Network className="w-4 h-4" /> REGISTRY_INSPECTOR
                </span>
                <span className="font-mono text-[9px] text-retro-charcoal/50">
                  NODE_ID: {activeNodeId?.toUpperCase()}
                </span>
              </div>

              {activeNode ? (
                <div className="space-y-4">
                  {/* Node Title & Description */}
                  <div className="space-y-1">
                    <h4 className="font-pixel text-lg text-retro-charcoal">
                      {activeNode.label}
                    </h4>
                    <p className="text-xs text-retro-charcoal/70 leading-relaxed font-sans">
                      {activeNode.description}
                    </p>
                  </div>

                  {/* Associated entries */}
                  <div className="space-y-3 pt-3 border-t border-retro-border/30">
                    
                    {/* Projects */}
                    {associated?.projects && associated.projects.length > 0 && (
                      <div className="space-y-1">
                        <span className="font-mono text-[10px] text-retro-charcoal/50 block">ASSOCIATED PROJECTS:</span>
                        <div className="space-y-1 pl-2">
                          {associated.projects.map(p => (
                            <div key={p.id} className="font-mono text-xs text-retro-green flex items-center gap-1.5">
                              <span className="w-1 h-1 bg-retro-green" />
                              <span>{p.title}</span>
                              <span className="text-[9px] text-retro-charcoal/40 font-normal border border-retro-border/20 px-1 py-0.2 bg-retro-beige/40">
                                {p.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Experiments */}
                    {associated?.experiments && associated.experiments.length > 0 && (
                      <div className="space-y-1">
                        <span className="font-mono text-[10px] text-retro-charcoal/50 block">ASSOCIATED EXPERIMENTS:</span>
                        <div className="space-y-1 pl-2">
                          {associated.experiments.map(e => (
                            <div key={e.id} className="font-mono text-xs text-retro-amber flex items-center gap-1.5">
                              <span className="w-1 h-1 bg-retro-amber" />
                              <span>[{e.id}] {e.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Articles */}
                    {associated?.articles && associated.articles.length > 0 && (
                      <div className="space-y-1">
                        <span className="font-mono text-[10px] text-retro-charcoal/50 block">ASSOCIATED ARTICLES:</span>
                        <div className="space-y-1 pl-2">
                          {associated.articles.map(a => (
                            <div key={a.slug} className="font-mono text-xs text-retro-blue flex items-center gap-1.5">
                              <span className="w-1 h-1 bg-retro-blue" />
                              <span>{a.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Empty placeholder */}
                    {associated &&
                      associated.projects.length === 0 &&
                      associated.experiments.length === 0 &&
                      associated.articles.length === 0 && (
                        <div className="font-mono text-xs text-retro-charcoal/40 italic py-2">
                          No related project archives or log entries indexed under this specific node.
                        </div>
                      )}

                  </div>
                </div>
              ) : (
                <div className="font-mono text-xs text-retro-charcoal/50 italic py-8 text-center">
                  Select a network node to inspect its associated systems parameters.
                </div>
              )}
            </div>

            <div className="font-mono text-[9px] text-retro-charcoal/40 pt-4 border-t border-retro-border/20 mt-4 select-none">
              GRAPH INTERACTION ACTIVE | SELECT OR HOVER NODES TO QUERY
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
