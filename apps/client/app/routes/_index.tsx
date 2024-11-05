import type { MetaFunction } from '@remix-run/node'
import {
  json,
  useLoaderData,
} from '@remix-run/react'

import { useEndpoint } from '../.client/swr'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export async function clientLoader() {
  // const res = await client.api.$get();
  // if (!res.ok) {
  // throw json("API RESPONSE ERROR", { status: 500 });
  // }

  // const data = await res.json();
  // return json({ data });
  return json('TEST DATA')
}

export default function Index() {
  const data = useLoaderData<typeof clientLoader>()

  const { data: newData } = useEndpoint()

  return (
    <div>
      <h1>Hello World</h1>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
      <pre>
        <code>{JSON.stringify(newData, null, 2)}</code>
      </pre>
    </div>
  )
}
