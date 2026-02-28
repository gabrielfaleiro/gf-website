# Tech Decision Guide

## Overview

Framework for making technology stack and architecture decisions.

## Decision Framework

### 1. Define Criteria
- Performance requirements
- Team expertise
- Ecosystem and community support
- Licensing and cost
- Long-term maintainability

### 2. Evaluate Options
- Create comparison matrix
- POC for top 2-3 options
- Document pros/cons

### 3. Decide and Document
- Record decision and rationale (ADR)
- Define success metrics
- Set review date

## Technology Stack Reference

### Frontend
| Tech | Use When | Avoid When |
|------|----------|------------|
| React/Next.js | SEO, full-stack JS | Simple static sites |
| React Native | Cross-platform mobile | Native-only requirements |
| Flutter | High-performance mobile | Web primary target |

### Backend
| Tech | Use When | Avoid When |
|------|----------|------------|
| Node.js/Express | JS ecosystem, real-time | CPU-intensive workloads |
| Python/FastAPI | Data/ML, rapid prototyping | Low-latency critical |
| Go | High throughput, concurrency | Rapid iteration needed |

### Database
| Tech | Use When | Avoid When |
|------|----------|------------|
| PostgreSQL | Relational, ACID, complex queries | Simple key-value |
| MongoDB | Flexible schema, document model | Complex joins |
| Redis | Caching, sessions, queues | Persistent primary store |

### Cloud
| Provider | Strengths | Consider |
|----------|-----------|----------|
| AWS | Broadest services | Complexity |
| GCP | Data/ML, Kubernetes | Smaller ecosystem |
| Azure | Microsoft integration | Some services lag |

## Security Considerations

- **Authentication:** OAuth2, JWT with short expiry, refresh tokens
- **Authorization:** RBAC, least privilege
- **Data:** Encryption at rest (AES-256), TLS in transit
- **Secrets:** Vault, environment variables (never in code)

## Scalability Guidelines

- **Stateless services:** Session in Redis/DB, not in memory
- **Database:** Read replicas, connection pooling, connection limits
- **Caching:** Cache invalidation strategy, TTLs
- **Async:** Message queues for decoupling, retry with backoff

## Troubleshooting

### Common Issues

1. **Slow API responses:** Check N+1 queries, add indexes, enable query logging
2. **Memory spikes:** Profile heap, check for leaks, limit connection pools
3. **Deployment failures:** Validate env vars, check migrations, rollback plan
4. **Integration failures:** Validate contracts, add retries, circuit breakers

### Getting Help

- Review logs and metrics
- Check dependency versions and changelogs
- Consult official documentation
- Community forums (Stack Overflow, GitHub Discussions)
