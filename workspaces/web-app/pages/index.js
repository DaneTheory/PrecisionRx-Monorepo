import foo from '@precisionrx/foo'
import Bar from '@precisionrx/bar'


export default function Home() {
  return (
    <div>
      Imported modules (Workspaces):
      <pre>{foo}</pre>
      <Bar />
    </div>
  )
}
