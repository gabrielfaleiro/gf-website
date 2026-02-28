
import { Post, Category } from '../types';

/**
 * INSTRUCCIONES:
 * 1. Copia este archivo a la carpeta /posts
 * 2. Renómbralo (ej: mi-nuevo-articulo.ts)
 * 3. Rellena los campos. 
 *    - El campo 'content' soporta Markdown (MDX).
 *    - El campo 'date' debe ser un objeto Date: new Date('AAAA-MM-DD').
 * 4. Regístralo en /posts/index.ts para que aparezca en la web
 */

export const post: Post = {
  id: 'hackaton-getafe-ia-2023', 
  title_es: 'Hackaton Getafe 2023 sobre Inteligencia Artificial',
  title_en: 'Getafe Hackaton 2023 on Artificial Intelligence',
  excerpt_es: 'Participación en el Hackaton Getafe 2023 sobre IA, donde aprendimos sobre tecnologías como NeRFs, Gaussian Splatting, Stable Diffusion y más. Conseguimos el premio a la mejor presentación con ChillPark.',
  excerpt_en: 'Participation in the Getafe 2023 Hackaton on AI, where we learned about technologies such as NeRFs, Gaussian Splatting, Stable Diffusion and more. We won the award for best presentation with ChillPark.',
  content_es: `
¡Vaya fin de semana! Los días 4 y 5 de Noviembre participamos, mi gran amiga [Beatriz Hernandez](https://www.linkedin.com/in/beatriz-h-195a7019a/) y yo, junto con dos compañeras que conocimos en el evento, en el [Hackaton Getafe](https://hackathonlovers.tumblr.com/post/733271072708902912/retrospectiva-del-hackathongetafe2023) 2023 sobre inteligencia artificial, organizado por [Hackaton Lovers](https://hackathonlovers.com/).

Recibimos charlas de ponentes con experiencia en inteligencia artificial y emprendimiento: Rosa Elvira Lillo, Nerea Luis, David Hernández Cela.

Quiero compartir con vosotros algo de lo que aprendí en este evento.

| Nombre | Descripción |
|--------|-------------|
| [T3chfest](https://t3chfest.es/) | Evento sobre tecnología organizado por Nerea Luis en la UC3M. |
| [IBiDat](https://ibidat.es/) | UC3M-Santander Big Data Institute es un centro creado en la UC3M, en conjunto con el Banco Santander, para desarrollar la investigación en analítica para Big Data, ofrecer formación, y apoyar a socios públicos y privados en la implementación de estos procesos y tecnologías. |
| [Instant NeRFs](https://developer.nvidia.com/blog/getting-started-with-nvidia-instant-nerfs/) | NeRFs son una familia de algoritmos de inteligencia artificial, basados en redes neuronales, que permiten reconstruir imagenes 3D tomando como entrada imágenes 2D. Se llaman *[Neural Radiance Field](https://en.wikipedia.org/wiki/Neural_radiance_field)* (NeRF) y conocimos el proyecto llamado Instant NeRFs que está desarrollando NVIDIA. Existe un [repositorio en github](https://github.com/NVlabs/instant-ngp) para trabajar con estos algoritmos. |
| [Gaussian Splatting](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/) | Es una técnica para el renderizado eficiente de gráficos y es capaz de generar gráficos en 2D a partir de gráficos en 3D. Existe un artículo muy interesante que explica las [diferencias con los algoritmos NeRF](https://danielpikl.medium.com/what-is-the-difference-between-nerf-and-gaussian-splatting-technology-d6d9848faf80#:~:text=In%20summary%2C%20NeRF%20is%20a,medical%20imaging%20and%20scientific%20visualization.). También existe un [repositorio en github](https://github.com/graphdeco-inria/gaussian-splatting) para trabajar con estos algoritmos y la plataforma Hugging Face explica de forma didáctica [cómo funcionan los algoritmos de Gaussian Splatting](https://huggingface.co/blog/gaussian-splatting). |
| [Kaggle](https://www.kaggle.com/) | Es una gran comunidad de IA y ML en la que se realizan competiciones y se comparten modelos y sets de datos. |
| [Hugging Face](https://huggingface.co/) | Comunidad de IA en la que se comparten sets de datos y modelos. Ofrecen la posibilidad de ejecutar modelos a través de su *[Inference API](https://huggingface.co/inference-api)*. |
| [Stable Diffusion](https://stability.ai/stable-diffusion) | Es un modelo de IA generativa para generar imagenes 2D a partir de texto, *prompts*. Lo ha desarrollado Stability AI y el [código fuente es abierto](https://stability.ai/news/stable-diffusion-public-release) y accesible en un [repositorio de github](https://github.com/Stability-AI/stablediffusion). Existen páginas [web que simplifican el uso](https://stablediffusionweb.com/) de esta herramienta. También han creado un entorno de colaboración en google con [Jupyter Notebooks](https://colab.research.google.com/github/huggingface/notebooks/blob/main/diffusers/stable_diffusion.ipynb) para apoyar el uso de Stable Diffussion. Por último, existe una [demo](https://huggingface.co/spaces/stabilityai/stable-diffusion) de este modelo en la plataforma Hugging Face. |
| [Adobe Firefly](https://www.adobe.com/products/firefly/features/ai-art-generator.html) | Es una IA generadora de imágenes basada en prompts desarrollada por Adobe. |
| [Bing y DALL-E 3](https://www.bing.com/create) | Bing expone una interfaz prompt para utilizar el modelo DALL-E 3. La herramienta es gratuita pero está sujeta a disponibilidad. Existe la posibilidad de pagar por créditos para ejecutar más rápidamente esta heramienta. |
| [Llama 2](https://ai.meta.com/llama/) | Llama 2 es un modelo de lenguaje (LLM), similar a a ChatGPT, pero de código abierto. Está desarrollado por Meta (Facebook) y existe una [cuenta en github llamada FacebookResearch](https://github.com/facebookresearch) con centenares de repositorios sobre inteligencia artificial. Comparten el [código fuente del modelo Llama](https://github.com/facebookresearch/llama) y [ejemplos](https://github.com/facebookresearch/llama-recipes) para ejecutarlo. Tienes una [sección de recursos](https://ai.meta.com/resources/) en su página web con frameworks de desarrollo y demos de algunos de sus modelos más interesantes. El modelo de Llama 2 también está compartido y explicado en la plataforma de [HuggingFace](https://huggingface.co/blog/llama2). |
| [LangChain](https://www.langchain.com/) | LangChain es un framework de desarrollo de aplicaciones en python basadas en modelos de lenguaje. Tienen una [documentación](https://python.langchain.com/docs/get_started/introduction) muy completa para aprender a utilizar esta herramienta. |
| [PaLM 2](https://ai.google/discover/palm2/) | Es otro gran modelo de lenguaje (LLM) desarrollago por Google. |
| [Quantum AI](https://quantumai.google/) | Quantum AI es un grupo de trabajo de Google que desarrolla tecnologías cuánticas. [Cirq](https://quantumai.google/cirq) es una librería python para la programación de algoritmos en ordenadores cuánticos. Estos ordenadores pueden [simularse en máquinas virtuales](https://quantumai.google/cirq/simulate). |
| [Whisper](https://openai.com/research/whisper) | Es un modelo de reconocimiento del habla de propósito general desarrollado por OpenAI, empresa desarrolladora de ChatGPT. Este modelo puede utilizarse tal y como se explica en el [repositorio de github](https://github.com/openai/whisper) de este modelo. |
| [Anthropic](https://www.anthropic.com/) | Es una start-up creada por antiguos miembros de OpenAI que desarrollan IA de proposito general y grandes modelos de lenguaje (LLM). Su producto es un LLM de propósito general llamado [Claude](https://www.anthropic.com/product). |

Conseguimos el premio a la mejor presentación con la idea ChillPark, una aplicación para asistir en el aparcamiento en la calle.

Gracias al equipo organizador, a los ponentes y a los compañeros por esta gran experiencia.
  `,
  content_en: `
What a weekend! On November 4th and 5th, my great friend [Beatriz Hernandez](https://www.linkedin.com/in/beatriz-h-195a7019a/) and I, along with two colleagues we met at the event, participated in the [Getafe Hackaton](https://hackathonlovers.tumblr.com/post/733271072708902812/retrospectiva-del-hackathongetafe2023) 2023 on artificial intelligence, organized by [Hackaton Lovers](https://hackathonlovers.com/).

We received talks from experienced speakers in artificial intelligence and entrepreneurship: Rosa Elvira Lillo, Nerea Luis, David Hernández Cela.

I want to share with you something I learned at this event.

| Name | Description |
|------|-------------|
| [T3chfest](https://t3chfest.es/) | Technology event organized by Nerea Luis at UC3M. |
| [IBiDat](https://ibidat.es/) | UC3M-Santander Big Data Institute is a center created at UC3M, jointly with Banco Santander, to develop research in analytics for Big Data, provide training, and support public and private partners in the implementation of these processes and technologies. |
| [Instant NeRFs](https://developer.nvidia.com/blog/getting-started-with-nvidia-instant-nerfs/) | NeRFs are a family of artificial intelligence algorithms, based on neural networks, that allow 3D images to be reconstructed taking 2D images as input. They are called *[Neural Radiance Field](https://en.wikipedia.org/wiki/Neural_radiance_field)* (NeRF) and we learned about the project called Instant NeRFs that NVIDIA is developing. There is a [repository on github](https://github.com/NVlabs/instant-ngp) to work with these algorithms. |
| [Gaussian Splatting](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/) | It is a technique for efficient rendering of graphics and is capable of generating 2D graphics from 3D graphics. There is a very interesting article explaining the [differences with NeRF algorithms](https://danielpikl.medium.com/what-is-the-difference-between-nerf-and-gaussian-splatting-technology-d6d9848faf80). There is also a [repository on github](https://github.com/graphdeco-inria/gaussian-splatting) to work with these algorithms and the Hugging Face platform explains didactically [how Gaussian Splatting algorithms work](https://huggingface.co/blog/gaussian-splatting). |
| [Kaggle](https://www.kaggle.com/) | It is a large community of AI and ML where competitions are held and models and datasets are shared. |
| [Hugging Face](https://huggingface.co/) | AI community where datasets and models are shared. They offer the ability to run models through their *[Inference API](https://huggingface.co/inference-api)*. |
| [Stable Diffusion](https://stability.ai/stable-diffusion) | It is a generative AI model for generating 2D images from text, *prompts*. It has been developed by Stability AI. There are [web pages that simplify the use](https://stablediffusionweb.com/) of this tool. They have also created a collaboration environment with [Jupyter Notebooks](https://colab.research.google.com/github/huggingface/notebooks/blob/main/diffusers/stable_diffusion.ipynb) to support the use of Stable Diffusion. Finally, there is a [demo](https://huggingface.co/spaces/stabilityai/stable-diffusion) of this model on the Hugging Face platform. |
| [Adobe Firefly](https://www.adobe.com/products/firefly/features/ai-art-generator.html) | It is an AI image generator based on prompts developed by Adobe. |
| [Bing and DALL-E 3](https://www.bing.com/create) | Bing exposes a prompt interface to use the DALL-E 3 model. The tool is free but subject to availability. There is the possibility to pay for credits to run this tool faster. |
| [Llama 2](https://ai.meta.com/llama/) | Llama 2 is a language model (LLM), similar to ChatGPT, but open source. It is developed by Meta (Facebook) and there is a [github account called FacebookResearch](https://github.com/facebookresearch) with hundreds of repositories on artificial intelligence. There is a [resources section](https://ai.meta.com/resources/) on their website with development frameworks and demos of some of their most interesting models. The Llama 2 model is also shared and explained on the [HuggingFace](https://huggingface.co/blog/llama2) platform. |
| [LangChain](https://www.langchain.com/) | LangChain is a development framework for applications in python based on language models. They have [very complete documentation](https://python.langchain.com/docs/get_started/introduction) to learn how to use this tool. |
| [PaLM 2](https://ai.google/discover/palm2/) | It is another large language model (LLM) developed by Google. |
| [Quantum AI](https://quantumai.google/) | Quantum AI is a working group at Google that develops quantum technologies. [Cirq](https://quantumai.google/cirq) is a python library for programming algorithms on quantum computers. |
| [Whisper](https://openai.com/research/whisper) | It is a general-purpose speech recognition model developed by OpenAI, the company behind ChatGPT. This model can be used as explained in the [github repository](https://github.com/openai/whisper) of this model. |
| [Anthropic](https://www.anthropic.com/) | It is a start-up created by former members of OpenAI that develops general-purpose AI and large language models (LLM). Its product is a general-purpose LLM called [Claude](https://www.anthropic.com/product). |

We won the award for the best presentation with the idea ChillPark, an application to help with street parking.

Thanks to the organizing team, the speakers and the colleagues for this great experience.
  `,
  author: 'Gabriel Faleiro',
  date: new Date('2023-11-09'), 
  category: Category.TECNOLOGIA, 
  imageUrl: '/posts/2023-11-09-hackaton-getafe-ia-1.jpg',
};
