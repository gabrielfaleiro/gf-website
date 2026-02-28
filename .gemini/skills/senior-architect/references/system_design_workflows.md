# System Design Workflows

## Overview

Step-by-step workflows for designing and implementing scalable systems.

## Design Workflow

### 1. Requirements Gathering
- Functional requirements (what the system does)
- Non-functional requirements (performance, availability, security)
- Constraints (budget, timeline, team size)

### 2. High-Level Design
- Identify main components
- Define interfaces between components
- Sketch data flow

### 3. Deep Dive
- Database schema and indexing
- API design (REST/GraphQL)
- Caching strategy
- Error handling and retries

### 4. Scalability Planning
- Horizontal vs vertical scaling
- Load balancing
- Database sharding/replication
- CDN for static assets

### 5. Trade-off Analysis
- Consistency vs availability (CAP)
- Latency vs throughput
- Cost vs performance

## Implementation Workflow

### Step 1: Scaffold
```bash
# Create project structure
npx create-next-app@latest my-app
# or
python -m venv venv && pip install -r requirements.txt
```

### Step 2: Define Contracts
- API contracts (OpenAPI)
- Database migrations
- Event schemas

### Step 3: Implement Core
- Start with critical path
- Add error handling
- Write tests

### Step 4: Integrate
- Connect components
- End-to-end testing
- Performance testing

### Step 5: Deploy
- CI/CD pipeline
- Environment configuration
- Monitoring and alerting

## Optimization Strategies

- **Caching:** Redis, in-memory, HTTP cache headers
- **Database:** Indexes, query optimization, connection pooling
- **Async:** Non-blocking I/O, message queues
- **CDN:** Static assets, edge caching

## Troubleshooting Guide

| Symptom | Possible Cause | Action |
|---------|----------------|--------|
| High latency | N+1 queries, missing indexes | Profile queries, add indexes |
| Memory leaks | Unclosed connections, event listeners | Audit resource cleanup |
| Inconsistent data | Race conditions, no transactions | Add transactions, idempotency |
| Poor availability | Single points of failure | Add redundancy, health checks |
