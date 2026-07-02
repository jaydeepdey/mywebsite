import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Search, X } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 'post1',
      title: 'Architecting Scalable Micro-SaaS Platforms on Edge Networks',
      summary: 'A deep dive into serverless database connection pooling, global CDN caching strategies, and reducing monthly hosting bills below $50.',
      date: 'June 24, 2026',
      readTime: '6 min read',
      category: 'Engineering',
      content: `### Introduction
Building a SaaS used to require managing database connections, scaling VM instances, and dealing with massive monthly infrastructure bills. Today, using modern edge runtime layers (like Cloudflare Workers, Vercel Edge, or AWS Lambdas) alongside serverless databases, you can host applications serving thousands of active users for less than a cup of coffee.

### The Edge First Paradigm
By deploying your backend logic close to your user base, you eliminate typical network transit latencies. However, edge networks impose constraints:
1. **Cold Start Reductions**: Keep your bundle size small (<1MB compressed).
2. **Stateless Operations**: No global memory states; rely on external state brokers like Redis.

### Connection Pooling Challenges
Typical relational databases (like standard Postgres) choke when thousands of ephemeral serverless functions open connections simultaneously. The solution?
- Use HTTP-based connection pools like Prisma Accelerate, Neon Serverless Driver, or Supabase connection pooling.
- This maps connections to a shared socket pool, preventing database exhaustion.

### Summary
Transitioning to an edge-first stack requires adjusting your database and session logic, but the performance gains and cost savings are undeniably worth it.`
    },
    {
      id: 'post2',
      title: 'IT Project Delivery: 5 Anti-Patterns That Derail Enterprise Software',
      summary: 'Lessons learned from 27 years in enterprise delivery. Spotting scope creeps, structural silos, and failure in team communication early.',
      date: 'May 12, 2026',
      readTime: '8 min read',
      category: 'Management',
      content: `### The Stakes in Enterprise Delivery
In complex corporate architectures—spanning banking, insurance, and retail logistics—software projects don't fail because developers don't know how to code. They fail because of system alignment failures.

### The 5 Deadly Anti-Patterns

1. **The "Shadow" Scope Creep**
   * *Problem*: Adding minor features without adjusting timelines or resources.
   * *Solution*: Enforce strict change control board reviews and transparent backlog adjustments.

2. **Isolated Delivery Silos**
   * *Problem*: Dev teams, QA teams, and operations teams acting as independent kingdoms.
   * *Solution*: Form product-oriented squads containing all disciplines working towards a single unified OKR.

3. **Ignoring Legacy Debt**
   * *Problem*: Building new applications on top of fragile, undocumented mainframes without refactoring.
   * *Solution*: Allocate at least 15% of sprint velocity to technical debt resolution.

4. **Vanity Reporting Metrics**
   * *Problem*: Showing 90% completed milestones when integration testing hasn't started.
   * *Solution*: Focus on end-to-end working software and automated integration deployments.

5. **Lack of User Feedback Loops**
   * *Problem*: Building in isolation for months based on outdated business specifications.
   * *Solution*: Run weekly staging reviews with operational business partners.

### Conclusion
Strong delivery leadership is about building organizational trust, automating verification, and keeping communication fluid.`
    },
    {
      id: 'post3',
      title: 'The Developer-Creator Playbook: Building a Digital Media Engine',
      summary: 'How software developers can utilize YouTube and content creation to validate SaaS products, build a community, and boost their careers.',
      date: 'April 08, 2026',
      readTime: '5 min read',
      category: 'Content Strategy',
      content: `### The Power of Audience Integration
Many software developers build products in complete silence, launch them to empty rooms, and wonder why nobody buys. By documenting your build journey publicly (building in public), you establish a warm feedback loop.

### Crafting a Content Loop
* **Document, Don't Create**: Don't waste hours scripting artificial tutorials. Record your real debugging sessions, your architectural decisions, and your live failures.
* **Repurpose Assets**: A single 15-minute YouTube video can be split into a LinkedIn carousel, three X posts, and a technical blog post.
* **Feedback as Validation**: Use video comments to discover what problems developers are actually facing. Build products to solve *those* problems.

### Career Acceleration
Building a public presence acts as a permanent, interactive resume. Opportunities find you directly, reducing job hunting friction.`
    }
  ];

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="blog-section fade-in">
      <div className="section-header">
        <span className="section-subtitle">THE LOGBOOK</span>
        <h2 className="section-title title-font">Articles & Executive Insights</h2>
        <div className="section-line"></div>
      </div>

      {/* Search Input */}
      <div className="search-bar-container">
        <div className="search-wrapper glass-panel">
          <Search size={16} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search articles by title, content, or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Articles List */}
      <div className="blog-posts-grid">
        {filteredPosts.map((post) => (
          <article 
            key={post.id} 
            className="blog-post-card glass-panel glass-panel-hover"
            onClick={() => setSelectedPost(post)}
          >
            <div className="post-header-info">
              <span className="post-category-tag">{post.category}</span>
              <div className="post-meta">
                <span className="meta-item">
                  <Calendar size={12} /> {post.date}
                </span>
                <span className="meta-item">
                  <Clock size={12} /> {post.readTime}
                </span>
              </div>
            </div>
            
            <h3 className="post-card-title title-font">{post.title}</h3>
            <p className="post-card-summary">{post.summary}</p>
            
            <button className="post-read-btn">
              Read Article <ArrowRight size={14} className="btn-arrow" />
            </button>
          </article>
        ))}
        {filteredPosts.length === 0 && (
          <div className="no-results glass-panel">
            <p>No articles matching search query found.</p>
          </div>
        )}
      </div>

      {/* Deep-Read Article Modal */}
      {selectedPost && (
        <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
          <div className="article-modal-container glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedPost(null)}>Close</button>
            
            <div className="article-modal-header">
              <span className="article-category">{selectedPost.category}</span>
              <h2 className="article-modal-title title-font">{selectedPost.title}</h2>
              <div className="article-modal-meta">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
            </div>

            <div className="article-modal-body markdown-rendered">
              {/* Basic markdown parsing simulation for render styling */}
              {selectedPost.content.split('\n\n').map((block, idx) => {
                if (block.startsWith('### ')) {
                  return <h3 key={idx} className="md-h3 title-font">{block.replace('### ', '')}</h3>;
                }
                if (block.startsWith('* ') || block.startsWith('- ')) {
                  return (
                    <ul key={idx} className="md-ul">
                      {block.split('\n').map((li, i) => (
                        <li key={i}>{li.replace(/^[*\-]\s+/, '')}</li>
                      ))}
                    </ul>
                  );
                }
                if (block.startsWith('1. ')) {
                  return (
                    <ol key={idx} className="md-ol">
                      {block.split('\n').map((li, i) => (
                        <li key={i}>{li.replace(/^\d+\.\s+/, '')}</li>
                      ))}
                    </ol>
                  );
                }
                return <p key={idx} className="md-p">{block}</p>;
              })}
            </div>
            
            <div className="article-modal-footer">
              <BookOpen size={16} /> Technical Log v7.4
            </div>
          </div>
        </div>
      )}

      <style>{`
        .blog-section {
          padding: 60px 0;
        }

        .search-bar-container {
          display: flex;
          justify-content: center;
          margin-bottom: 40px;
        }

        .search-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          width: 100%;
          max-width: 600px;
          background: rgba(18, 12, 45, 0.2);
        }

        .search-icon {
          color: var(--neon-cyan);
        }

        .search-input {
          width: 100%;
          font-size: 13.5px;
          color: #fff;
        }

        .search-input::placeholder {
          color: var(--text-muted);
        }

        .blog-posts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        @media (max-width: 900px) {
          .blog-posts-grid {
            grid-template-columns: 1fr;
          }
        }

        .blog-post-card {
          padding: 24px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: rgba(18, 12, 45, 0.15);
          text-align: left;
        }

        .post-header-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .post-category-tag {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--neon-purple);
          text-transform: uppercase;
          background: rgba(189, 0, 255, 0.08);
          border: 1px solid rgba(189, 0, 255, 0.2);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .post-meta {
          display: flex;
          gap: 12px;
          font-size: 11px;
          color: var(--text-muted);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .post-card-title {
          font-size: 18px;
          color: #fff;
          line-height: 1.4;
        }

        .post-card-summary {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.5;
          flex-grow: 1;
        }

        .post-read-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 600;
          color: var(--neon-cyan);
          cursor: pointer;
          width: fit-content;
          transition: all 0.2s ease;
        }

        .post-read-btn .btn-arrow {
          transition: transform 0.2s ease;
        }

        .blog-post-card:hover .btn-arrow {
          transform: translateX(4px);
        }

        .no-results {
          grid-column: 1 / -1;
          padding: 40px;
          text-align: center;
          color: var(--text-secondary);
        }

        /* Article Modal */
        .article-modal-container {
          position: relative;
          width: 100%;
          max-width: 720px;
          background: rgba(10, 6, 26, 0.98);
          border: 1px solid rgba(0, 240, 255, 0.3);
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 0 50px rgba(0, 240, 255, 0.25);
          animation: modal-zoom-in 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
          max-height: 90vh;
          overflow-y: auto;
          text-align: left;
        }

        @media (max-width: 580px) {
          .article-modal-container {
            padding: 24px;
          }
        }

        .article-modal-header {
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 20px;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .article-category {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--neon-cyan);
          text-transform: uppercase;
        }

        .article-modal-title {
          font-size: 24px;
          color: #fff;
          line-height: 1.3;
        }

        .article-modal-meta {
          display: flex;
          gap: 12px;
          font-size: 11px;
          color: var(--text-muted);
        }

        /* Markdown rendered styling */
        .markdown-rendered {
          color: #e2e8f0;
          font-size: 15px;
          line-height: 1.7;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .md-h3 {
          font-size: 18px;
          color: #fff;
          margin-top: 16px;
          border-left: 2px solid var(--neon-purple);
          padding-left: 12px;
        }

        .md-p {
          color: var(--text-secondary);
        }

        .md-ul, .md-ol {
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          color: var(--text-secondary);
        }

        .article-modal-footer {
          margin-top: 30px;
          border-top: 1px solid var(--border-glass);
          padding-top: 20px;
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 8px;
        }
      `}</style>
    </section>
  );
};

export default Blog;
