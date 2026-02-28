
import { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    title_es: 'Consejero Tecnológico',
    title_en: 'Technology Advisor',
    description_es: 'Transformo ideas complejas en productos tangibles mediante un análisis riguroso de viabilidad técnica y el diseño de arquitecturas escalables.',
    description_en: 'I turn complex ideas into tangible products through rigorous technical feasibility analysis and the design of scalable architectures.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    explanation_es: `
**Análisis de Viabilidad Técnica**: Evaluación profunda de tecnologías emergentes para asegurar que la solución propuesta es ejecutable, rentable y sostenible a largo plazo.

**Diseño de Roadmap de Producto**: Definición de la hoja de ruta técnica desde la conceptualización hasta el lanzamiento, priorizando las funcionalidades críticas y la eficiencia operativa.

**Diseño de MVP y Prototipado**: Diseño de modelos de Mínimo Producto Viable para validar hipótesis de mercado y negocio con el menor riesgo e inversión posibles.

**Arquitectura de Infraestructura Técnica**: Diseño de sistemas robustos adaptados a entornos industriales de alta exigencia.

**Gobernanza y Estrategia Técnica**: Definición de las "Reglas del Juego" tecnológicas. No gestiono al equipo, sino que establezco los estándares de calidad y arquitectura que el equipo debe seguir para evitar la deuda técnica.

**Alineación Tecnología-Negocio**: Traduzco los retos técnicos a impacto financiero y riesgos operativos para el Comité de Dirección.

**Supervisión de Cumplimiento y Seguridad (IEC 62443)**: Diseño de la estrategia de ciberseguridad industrial y fiabilidad desde el diseño, asegurando que la propiedad intelectual y los activos críticos estén blindados.

**Mentoring para Líderes Técnicos**: Acompañamiento al CTO o Lead Engineer de tu equipo. Les ayudo a elevar su perfil de "técnico" a "gestor", desbloqueando problemas complejos y mejorando la cultura de ingeniería.
    `,
    explanation_en: `
**Technical Feasibility Analysis**: In-depth evaluation of emerging technologies to ensure the proposed solution is executable, cost-effective and sustainable in the long term.

**Product Roadmap Design**: Definition of the technical roadmap from concept to launch, prioritizing critical features and operational efficiency.

**MVP Design and Prototyping**: Designing Minimum Viable Product models to validate market and business hypotheses with minimal risk and investment.

**Technical Infrastructure Architecture**: Designing robust systems tailored to demanding industrial environments.

**Governance and Technical Strategy**: Defining the technological "Rules of the Game." I do not manage the team, but set the quality and architecture standards the team should follow to avoid technical debt.

**Technology-Business Alignment**: Translating technical challenges into financial impact and operational risks for the Executive Committee.

**Compliance and Security Oversight (IEC 62443)**: Designing industrial cybersecurity and reliability strategies from the ground up, ensuring IP and critical assets are protected.

**Mentoring for Technical Leaders**: Supporting your CTO or Lead Engineer to elevate from "technician" to "manager", unblocking complex problems and improving engineering culture.
    `,
  },
  {
    id: 's3',
    title_es: 'Auditoría de Tech Due Diligence (Auditoría Técnica para Inversores)',
    title_en: 'Tech Due Diligence Audit (Technical Audit for Investors)',
    description_es: 'Proporciono un análisis crítico y objetivo de los activos tecnológicos de una compañía para inversores, asegurando que la tecnología sea una base sólida para el crecimiento y no un riesgo oculto para la inversión.',
    description_en: 'I provide a critical and objective analysis of a company\'s technological assets for investors, ensuring technology is a solid foundation for growth and not a hidden investment risk.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    explanation_es: `
**Evaluación de la Arquitectura y Escalabilidad**: Análisis profundo de la infraestructura técnica (Software, IIoT, Cloud) para garantizar que el sistema puede soportar el crecimiento proyectado por el negocio.

**Auditoría de Seguridad y Cumplimiento**: Verificación del cumplimiento de estándares industriales y de ciberseguridad, como la IEC 62443, para identificar vulnerabilidades críticas en el producto.

**Revisión de la Calidad del Desarrollo**: Auditoría del código fuente y de los procesos de ingeniería, asegurando el uso de mejores prácticas como los principios SOLID y metodologías Agile.

**Validación de la Propiedad Intelectual y Deuda Técnica**: Identificación de riesgos relacionados con el uso de software de terceros y cuantificación del coste necesario para resolver problemas estructurales heredados.

**Análisis de la Viabilidad del Roadmap**: Contraste técnico entre la hoja de ruta presentada por la compañía y su capacidad real de ejecución para cumplir con los hitos estratégicos.
    `,
    explanation_en: `
**Architecture and Scalability Assessment**: Deep analysis of technical infrastructure (Software, IIoT, Cloud) to ensure the system can support the business's projected growth.

**Security and Compliance Audit**: Verification of compliance with industrial and cybersecurity standards, such as IEC 62443, to identify critical vulnerabilities in the product.

**Development Quality Review**: Audit of source code and engineering processes to ensure use of best practices like SOLID principles and Agile methodologies.

**IP Validation and Technical Debt**: Identification of risks related to third-party software usage and estimation of the effort required to resolve inherited structural issues.

**Roadmap Feasibility Analysis**: Technical contrast between the company's presented roadmap and its real capacity to execute and meet strategic milestones.
    `
  },
//   {
//     id: 's4',
//     title: 'Servicios de Prototipado',
//     description: 'Transformo conceptos abstractos en activos tangibles mediante el desarrollo de prototipos funcionales y MVPs que permiten validar la tecnología y la experiencia de usuario antes de la industrialización.',
//     icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
//     explanation: `
// **Desarrollo de MVPs Tecnológicos**: Construcción de productos mínimos viables que integran hardware y software para validar hipótesis de negocio en entornos reales.

// **Prototipado de Sistemas IIoT**: Diseño y ensamblaje de soluciones conectadas utilizando arquitecturas de microservicios, sensores y protocolos de comunicación industrial.

// **Diseño de Pruebas de Concepto (PoC)**: Ejecución de pilotos técnicos rápidos para demostrar la viabilidad de una innovación antes de comprometer grandes inversiones.

// **Integración de Hardware de Terceros**: Selección y modificación de componentes de proveedores para crear soluciones personalizadas y optimizadas.

// **Validación de User Experience (UX)**: Prototipado rápido para testear la interacción del usuario con la tecnología, asegurando que la solución sea intuitiva y eficaz.
//     `
//   },
  {
    id: 's5',
    title_es: 'Sprint de Ideación de Fin de Semana',
    title_en: 'Weekend Ideation Sprint',
    description_es: 'Sesiones intensivas de co-creación diseñadas para acelerar la transformación de una oportunidad de mercado en un concepto de producto validado y listo para el desarrollo.',
    description_en: 'Intensive co-creation sessions designed to accelerate the transformation of a market opportunity into a validated product concept ready for development.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    explanation_es: `
**Metodología de Aceleración**: Aplicación de marcos de trabajo como Design Thinking y Lean Startup para definir el modelo de negocio y las hipótesis críticas en un tiempo récord.

**Identificación de "Puntos de Dolor"**: Análisis profundo de las necesidades del cliente y del mercado para asegurar que la solución propuesta resuelva problemas reales.

**Definición del Business Model Canvas**: Estructuración de la propuesta de valor, canales, flujos de ingresos y alianzas estratégicas necesarias para el éxito del proyecto.

**Prototipado / MVP**: Creación de representaciones tangibles de la solución para realizar validaciones rápidas con usuarios y stakeholders.

**Dinámicas de Grupo y Co-creación**: Facilitación de talleres que fomentan la colaboración entre perfiles multidisciplinares, eliminando silos y alineando visiones.
    `
    ,
    explanation_en: `
**Acceleration Methodology**: Applying frameworks such as Design Thinking and Lean Startup to define the business model and critical hypotheses in record time.

**Pain Point Identification**: Deep analysis of customer and market needs to ensure the proposed solution addresses real problems.

**Business Model Canvas Definition**: Structuring the value proposition, channels, revenue streams and strategic partnerships required for project success.

**Prototyping / MVP**: Creating tangible representations of the solution to perform rapid validations with users and stakeholders.

**Group Dynamics and Co-creation**: Facilitating workshops that foster collaboration among multidisciplinary profiles, removing silos and aligning visions.
    `
  }
];
