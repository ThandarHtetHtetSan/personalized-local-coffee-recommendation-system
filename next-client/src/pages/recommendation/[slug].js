import Layout from "@/components/Layout"
import { useRouter } from "next/router"

const Recommendation = () => {
  const router = useRouter()
  return (
    <Layout className="container mx-auto">
      <div className="flex px-4 py-6">
        Recommendation , {router.query.slug}
      </div>
    </Layout>
  )
}

export default Recommendation