import { useState, useEffect } from 'react';
import { Package, Code2, Sparkles, Download, Github, Copy, Check, Terminal, Palette, Zap, ExternalLink, BookOpen, Star, TrendingUp } from 'lucide-react';

function App() {
  const [copiedReact, setCopiedReact] = useState(false);
  const [copiedUse, setCopiedUse] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const copyToClipboard = (text: string, setter: (value: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div
          className="absolute w-96 h-96 bg-green-500/20 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <header className="container mx-auto px-6 pt-20 pb-32">
          <div className="text-center mb-16">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-8 animate-pulse">
              <Star className="w-4 h-4 text-green-400 fill-green-400" />
              <span className="text-green-400">Open Source</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-300">MIT Licensed</span>
            </div>

            {/* Main Title with Gradient */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                GeeksforGeeks
              </span>
              <br />
              <span className="text-white">Profile Integration</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              Two powerful React packages to seamlessly integrate GFG profiles.
              <br />
              <span className="text-green-400 font-semibold">Choose your approach:</span> Pre-styled beauty or complete creative freedom.
            </p>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-6 justify-center mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl px-6 py-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-green-400 mb-1">1.1.8</div>
                <div className="text-sm text-gray-400">react-gfg version</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl px-6 py-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-1">1.0.7</div>
                <div className="text-sm text-gray-400">use-react-gfg version</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl px-6 py-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400 mb-1">MIT</div>
                <div className="text-sm text-gray-400">Open Source</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#packages"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Sparkles className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Explore Packages</span>
              </a>
              <a
                href="https://github.com/BamaCharanChhandogi/react-gfg"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-gray-800 border-2 border-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-green-500 transition-all hover:scale-105"
              >
                <Github className="w-5 h-5 group-hover:text-green-400 transition-colors" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </header>

        {/* Package Cards Section */}
        <main className="container mx-auto px-6 pb-20" id="packages">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                Pick Your Power
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Both packages fetch complete GFG profile data. The difference? Your level of control.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">
            {/* react-gfg Card */}
            <div className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-green-500/30 rounded-3xl overflow-hidden hover:border-green-500 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/5 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Header */}
              <div className="relative p-8 border-b border-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-2xl">
                        <Palette className="w-8 h-8" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white mb-1">react-gfg</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400 text-sm font-mono">v1.1.8</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-500 text-sm">Pre-styled Component</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full">
                    <span className="text-green-400 text-xs font-bold">POPULAR</span>
                  </div>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Beautiful, production-ready component. Zero configuration, maximum impact. Perfect for developers who want stunning results instantly.
                </p>
              </div>

              {/* Body */}
              <div className="relative p-8 space-y-6">
                {/* Features */}
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    Key Features
                  </h4>
                  <div className="space-y-3">
                    {[
                      'Beautiful default styling out of the box',
                      'Customizable themes and colors',
                      'Optional profile image control',
                      'Custom CSS class support',
                      'Zero configuration needed'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-gray-300">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Installation */}
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-green-400" />
                    Installation
                  </h4>
                  <div className="relative group/code">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-xl opacity-0 group-hover/code:opacity-100 transition-opacity"></div>
                    <div className="relative bg-black/50 border border-gray-800 rounded-xl p-4 font-mono text-sm">
                      <code className="text-green-400">npm install react-gfg</code>
                      <button
                        onClick={() => copyToClipboard('npm install react-gfg', setCopiedReact)}
                        className="absolute top-3 right-3 text-gray-500 hover:text-green-400 transition-colors"
                      >
                        {copiedReact ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Code Example */}
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-green-400" />
                    Quick Start
                  </h4>
                  <div className="bg-black/50 border border-gray-800 rounded-xl p-4 overflow-x-auto">
                    <pre className="text-sm">
                      <code className="text-gray-300">
                        <span className="text-purple-400">import</span> <span className="text-blue-400">{'{ GFGProfile }'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">"react-gfg"</span>;{'\n\n'}
                        <span className="text-purple-400">function</span> <span className="text-yellow-400">App</span>() {'{\n'}
                        {'  '}<span className="text-purple-400">return</span> <span className="text-blue-400">&lt;GFGProfile</span> <span className="text-green-400">username</span>=<span className="text-green-400">"bamacharan"</span> <span className="text-blue-400">/&gt;</span>;{'\n'}
                        {'}'}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {['Quick Setup', 'Portfolios', 'Landing Pages', 'Beginners'].map((tag) => (
                      <span key={tag} className="bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <a
                    href="https://www.npmjs.com/package/react-gfg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-bold transition-all hover:scale-105"
                  >
                    <Package className="w-4 h-4" />
                    <span>NPM Package</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://github.com/BamaCharanChhandogi/react-gfg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-4 py-3 rounded-xl font-bold transition-all hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://hashnode.com/@BamacharanChhandogi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-4 py-3 rounded-xl font-bold transition-all hover:scale-105"
                  >
                    <BookOpen className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* use-react-gfg Card */}
            <div className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-blue-500/30 rounded-3xl overflow-hidden hover:border-blue-500 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Header */}
              <div className="relative p-8 border-b border-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-blue-500 to-cyan-600 p-4 rounded-2xl">
                        <Zap className="w-8 h-8" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white mb-1">use-react-gfg</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400 text-sm font-mono">v1.0.7</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-500 text-sm">Custom Hook</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                    <span className="text-blue-400 text-xs font-bold">FLEXIBLE</span>
                  </div>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Raw data access with complete creative control. Build your vision from scratch. For developers who demand ultimate customization.
                </p>
              </div>

              {/* Body */}
              <div className="relative p-8 space-y-6">
                {/* Features */}
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    Key Features
                  </h4>
                  <div className="space-y-3">
                    {[
                      'Complete control over UI design',
                      'Raw profile data access',
                      'Built-in loading & error states',
                      'Full TypeScript support',
                      'Lightweight & minimal dependencies'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-gray-300">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Installation */}
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-blue-400" />
                    Installation
                  </h4>
                  <div className="relative group/code">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl opacity-0 group-hover/code:opacity-100 transition-opacity"></div>
                    <div className="relative bg-black/50 border border-gray-800 rounded-xl p-4 font-mono text-sm">
                      <code className="text-blue-400">npm install use-react-gfg</code>
                      <button
                        onClick={() => copyToClipboard('npm install use-react-gfg', setCopiedUse)}
                        className="absolute top-3 right-3 text-gray-500 hover:text-blue-400 transition-colors"
                      >
                        {copiedUse ? <Check className="w-4 h-4 text-blue-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Code Example */}
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-blue-400" />
                    Quick Start
                  </h4>
                  <div className="bg-black/50 border border-gray-800 rounded-xl p-4 overflow-x-auto">
                    <pre className="text-sm">
                      <code className="text-gray-300">
                        <span className="text-purple-400">import</span> <span className="text-blue-400">{'{ useGFG }'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">"use-react-gfg"</span>;{'\n\n'}
                        <span className="text-purple-400">function</span> <span className="text-yellow-400">Profile</span>() {'{\n'}
                        {'  '}<span className="text-purple-400">const</span> {'{ profile, loading, error }'} ={'\n'}
                        {'    '}<span className="text-yellow-400">useGFG</span>(<span className="text-green-400">"bamacharan"</span>);{'\n\n'}
                        {'  '}<span className="text-purple-400">return</span> <span className="text-blue-400">&lt;div&gt;</span>{'{profile.info.userName}'}<span className="text-blue-400">&lt;/div&gt;</span>;{'\n'}
                        {'}'}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {['Custom Design', 'Full Control', 'Complex UIs', 'Advanced'].map((tag) => (
                      <span key={tag} className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <a
                    href="https://www.npmjs.com/package/use-react-gfg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-xl font-bold transition-all hover:scale-105"
                  >
                    <Package className="w-4 h-4" />
                    <span>NPM Package</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://github.com/BamaCharanChhandogi/use-react-gfg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-4 py-3 rounded-xl font-bold transition-all hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://dev.to/bamacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-4 py-3 rounded-xl font-bold transition-all hover:scale-105"
                  >
                    <BookOpen className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                  Side by Side
                </span>
              </h2>
              <p className="text-lg text-gray-400">A detailed comparison to help you decide</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="px-6 py-5 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">Feature</th>
                      <th className="px-6 py-5 text-center text-sm font-bold text-green-400 uppercase tracking-wider">react-gfg</th>
                      <th className="px-6 py-5 text-center text-sm font-bold text-blue-400 uppercase tracking-wider">use-react-gfg</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {[
                      { feature: 'Pre-styled Component', react: true, use: false },
                      { feature: 'Custom Design Freedom', react: 'Limited', use: true },
                      { feature: 'Setup Time', react: '1 min', use: '5 min' },
                      { feature: 'CSS Customization', react: true, use: true },
                      { feature: 'Raw Data Access', react: false, use: true },
                      { feature: 'TypeScript Support', react: true, use: true },
                      { feature: 'Loading States', react: true, use: true },
                      { feature: 'Error Handling', react: true, use: true }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 text-gray-300">{row.feature}</td>
                        <td className="px-6 py-4 text-center">
                          {typeof row.react === 'boolean' ? (
                            row.react ? (
                              <div className="inline-flex w-6 h-6 rounded-full bg-green-500/20 border border-green-500/30 items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                              </div>
                            ) : (
                              <span className="text-gray-600">—</span>
                            )
                          ) : (
                            <span className="text-green-400 font-semibold">{row.react}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {typeof row.use === 'boolean' ? (
                            row.use ? (
                              <div className="inline-flex w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                              </div>
                            ) : (
                              <span className="text-gray-600">—</span>
                            )
                          ) : (
                            <span className="text-blue-400 font-semibold">{row.use}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Features Bento Grid */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                  What You Get
                </span>
              </h2>
              <p className="text-lg text-gray-400">Everything you need to showcase GFG profiles</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Package, title: 'Profile Statistics', desc: 'Coding scores, problem counts, streaks, and rankings', color: 'green' },
                { icon: Code2, title: 'Problem Details', desc: 'Access solved problems by difficulty with direct links', color: 'blue' },
                { icon: Sparkles, title: 'Easy Integration', desc: 'Simple API with comprehensive docs and examples', color: 'purple' },
                { icon: Zap, title: 'Lightweight', desc: 'Minimal bundle size with zero external dependencies', color: 'yellow' },
                { icon: Terminal, title: 'Developer First', desc: 'Built by developers, for developers. TypeScript ready', color: 'cyan' },
                { icon: Github, title: 'Open Source', desc: 'MIT licensed. Contribute, fork, customize freely', color: 'pink' }
              ].map((item, idx) => (
                <div key={idx} className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all hover:scale-105">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`}></div>
                  <div className="relative">
                    <div className={`w-12 h-12 bg-${item.color}-500/10 border border-${item.color}-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-12 text-center">
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Ready to Build?
                  </span>
                </h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join developers worldwide who trust these packages. Start showcasing GFG profiles in your projects today.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="https://www.npmjs.com/package/react-gfg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 rounded-xl font-bold text-lg overflow-hidden hover:scale-105 transition-all"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    <Download className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">react-gfg</span>
                  </a>
                  <a
                    href="https://www.npmjs.com/package/use-react-gfg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-xl font-bold text-lg overflow-hidden hover:scale-105 transition-all"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    <Download className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">use-react-gfg</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 mt-20">
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-gray-400 mb-2">
                  Crafted with <span className="text-red-500">♥</span> by
                </p>
                <p className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Bama Charan Chhandogi
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/BamaCharanChhandogi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center hover:border-green-500 hover:text-green-400 transition-all hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.npmjs.com/~bamacharanchhandogi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition-all hover:scale-110"
                >
                  <Package className="w-5 h-5" />
                </a>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-500 text-sm mb-1">Open Source</p>
                <p className="text-gray-400 font-semibold">MIT License</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
