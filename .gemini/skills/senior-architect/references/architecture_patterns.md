# Architecture Patterns

## Overview

Reference guide for senior architects designing scalable, maintainable systems across modern tech stacks.

## Patterns and Practices

### Pattern 1: Layered Architecture

**Description:**
Separation of concerns into distinct layers (presentation, business logic, data access). Each layer depends only on the layer below.

**When to Use:**
- Enterprise applications with clear domain boundaries
- Teams with specialized roles (frontend/backend)
- Applications requiring testability and maintainability

**Implementation:**
```typescript
// Example: Next.js API route with layered structure
// layers/presentation/api/users/route.ts
export async function GET() {
  const users = await userService.getAll();
  return Response.json(users);
}

// layers/business/userService.ts
export const userService = {
  getAll: async () => userRepository.findAll(),
};

// layers/data/userRepository.ts
export const userRepository = {
  findAll: () => db.user.findMany(),
};
```

**Benefits:**
- Clear separation of concerns
- Easier testing (mock layers)
- Team scalability

**Trade-offs:**
- Can add boilerplate for simple apps
- Risk of over-engineering for small projects

### Pattern 2: Event-Driven Architecture

**Description:**
Components communicate via events. Producers emit events; consumers react asynchronously.

**When to Use:**
- Microservices communication
- Decoupling components
- Audit trails and analytics pipelines

**Implementation:**
```typescript
// Event emitter pattern
interface DomainEvent {
  type: string;
  payload: unknown;
  timestamp: Date;
}

async function publishEvent(event: DomainEvent) {
  await eventBus.publish(event.type, event);
}
```

**Benefits:**
- Loose coupling
- Scalability (async processing)
- Resilience (retry, dead-letter queues)

**Trade-offs:**
- Eventual consistency
- Debugging complexity
- Event schema evolution

## Guidelines

### Code Organization
- Clear structure: group by feature or layer
- Logical separation: single responsibility per module
- Consistent naming: PascalCase for types, camelCase for functions
- Proper documentation: JSDoc for public APIs

### Performance Considerations
- Optimization strategies: profile before optimizing
- Bottleneck identification: APM, logging, metrics
- Monitoring approaches: distributed tracing, health checks
- Scaling techniques: horizontal scaling, caching, CDN

### Security Best Practices
- Input validation: sanitize all user input
- Authentication: JWT, OAuth2, session management
- Authorization: RBAC, ABAC, policy-based access
- Data protection: encryption at rest and in transit

## Anti-Patterns to Avoid

### Anti-Pattern 1: God Object
Single class/module doing too much. Split into focused components.

### Anti-Pattern 2: Tight Coupling
Direct dependencies between unrelated modules. Use interfaces and dependency injection.

### Anti-Pattern 3: Premature Optimization
Optimizing before measuring. Profile first, then optimize critical paths.

## Tools and Resources

### Recommended Tools
- **Diagramming:** Mermaid, PlantUML, Excalidraw
- **API Design:** OpenAPI/Swagger, Postman
- **Monitoring:** Prometheus, Grafana, Datadog

### Further Reading
- Clean Architecture (Robert C. Martin)
- Building Microservices (Sam Newman)
- Domain-Driven Design (Eric Evans)
