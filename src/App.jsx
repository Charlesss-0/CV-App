import './styles/App.css'

const sidebarBtns = [
  { name: 'Design', icon: 'fi fi-sr-layout-fluid' },
  { name: 'Elements', icon: 'fi fi-sr-apps-delete' },
  { name: 'Text', icon: 'fi fi-sr-text' }
]

export default function App() {
  return (
    <>
      <div className="flex">
        <ul
          className="
            bg-[#242424]
            text-[#efefef] 
            h-screen 
            flex 
            flex-col 
            gap-2 
            p-[1rem] 
            px-[0.5rem]"
        >
          {sidebarBtns.map((btn) => {
            return (
              <li
                key={btn.name}
                className="
                  p-[0.5rem]
                  text-center
                  cursor-pointer
                  [&>i]:grid
                  "
              >
                <i className={btn.icon}></i>
                {btn.name}
              </li>
            )
          })}
        </ul>

        <div className="w-full h-screen p-[5em] overflow-auto">
          <div className="bg-white w-[210mm] h-[297mm] mx-auto shadow-lg "></div>
        </div>
      </div>
    </>
  )
}
