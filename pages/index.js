import Link from 'next/link'

export default function Home() {
  return (
	<ul>
	  <li>
		<Link href="/b" as="/a">
		  <a>a</a>
		</Link>
	  </li>
	  <li>
		<Link href="/a" as="/b">
		  <a>b</a>
		</Link>
	  </li>
	  <li>
		<Link href="/c">
		  <a>c</a>
		</Link>
	  </li>
	  <li>
		<Link href="/d">
		  <a>d</a>
		</Link>
	  </li>
	</ul>
  )
}
