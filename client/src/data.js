export const profile = {
 name: "Aman Singh Patel",
 role: "AI / ML ENGINEERING STUDENT",
 headline: "Building useful AI systems,\nfrom retrieval to agents.",
 intro: "I work across machine learning, generative AI and backend engineering. My interests include LLM-powered applications, retrieval-augmented generation and multi-agent workflows.",
 email: "amann.singh.patel@gmail.com",
 github: "https://github.com/siraman0177",
 linkedin: "https://www.linkedin.com/in/aman-singh-patel-0b3a2127b/",
};
export const projects = [
 { number:"01", title:"AI-Native Adaptive Learning Engine", date:"2026", stack:["Python","FastAPI","LLMs","RAG","PostgreSQL","Qdrant","MCP"], description:[
 "Designed an adaptive exam-preparation engine that models exam requirements from syllabi and previous-year questions.",
 "Models learner state using mock performance, doubts and interaction history to personalize preparation.",
 "Built a multi-agent architecture with a central orchestrator for exam analysis, strategy generation, mock generation and context-aware QA.",
 "Added targeted RAG for study content, PYQs and learning memory, with PostgreSQL for structured learner state.",
 "Designed a feedback loop that turns mock results and recurring misconceptions into learning events and reprioritizes study strategy."
 ]},
 { number:"02", title:"RAGify India — Legal AI Research System", date:"April 2025", stack:["Python","LangChain","Mistral-7B","FAISS","Hugging Face"], description:[
 "Developed a RAG-based legal question-answering system using Mistral-7B, LLaMA, LangChain, FAISS and semantic search.",
 "Focused on legal information retrieval across 50+ Indian legal acts.",
 "Built a document-ingestion pipeline covering preprocessing, chunking, embedding generation and FAISS indexing.",
 "Optimized retrieval and connected the pipeline to grounded response generation.",
 "Constructed a benchmark dataset of 500+ legal queries for retrieval benchmarking and model evaluation."
 ]},
 { number:"03", title:"AI Trip Planner", date:"November 2025 · Team project", stack:["Python","LangChain","Multi-Agent LLMs","OOP"], description:[
 "Developed a multi-agent trip-planning system with Research, Optimization and Recommendation agents.",
 "Generates personalized itineraries from destination research and user preferences.",
 "Designed a weighted optimization algorithm combining cost, travel time, ratings and user preferences.",
 "Supports constraint-aware itinerary generation rather than relying on a single recommendation signal.",
 "Adds context-aware personalization using travel season, regional preferences and destination metadata."
 ]}
];
export const technologies = [
 ["Python","python"],["C / C++","code"],["SQL","database"],["PyTorch","pytorch"],["Scikit-learn","brain"],["NumPy","numpy"],["Pandas","pandas"],["LangChain","chain"],["LangGraph","workflow"],["Hugging Face","huggingface"],["FastAPI","fastapi"],["PostgreSQL","postgres"],["MySQL","database"],["Qdrant","database"],["ChromaDB","database"],["FAISS","search"],["Ollama","cpu"],["MCP","network"],["Git","git"],["GitHub","github"],["Jupyter Notebook","notebook"],["Google Colab","colab"],["VS Code","code"],["Pydantic","shield"],["REST APIs","api"],["JWT / OAuth2","lock"]
];
