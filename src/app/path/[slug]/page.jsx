import { revalidateTime } from '@/utils/config'
import getContent from '@/utils/requests'

export async function generateStaticParams() {
	const data = await getContent('path', {
		params: 'fields[0]=slug',
		revalidateParams: { revalidate: revalidateTime }
	})

	return data.map(item => ({ slug: item.slug }))
}

export default async function SlugPage({ params }) {
	const data = await getContent('path', {
		params: `populate[images][fields][0]=url&filters[slug][$eq]=${params.slug}`,
		revalidateParams: { revalidate: revalidateTime }
	})

	console.log(data)

	return null
}
