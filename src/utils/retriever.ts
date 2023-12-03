import { SupabaseVectorStore } from 'langchain/vectorstores/supabase'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { supabaseClient } from './supabaseClient'

const openAIApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY
const embeddings = new OpenAIEmbeddings({ openAIApiKey })
const client = supabaseClient

const vectorStore = new SupabaseVectorStore(embeddings, {
    client,
    tableName: 'documents',
    queryName: 'match_documents'
})

const retriever = vectorStore.asRetriever()

export { retriever }
