import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/sidebar'


const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      
        <div className="root conainer">
            <div className="wrapper">
            {children} 
         </div>
        </div>
  </main>
  )
}

export default Layout