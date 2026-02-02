import PillNav from './ui/PillNav';

export const Navbar = () => {
    
    return (
        <div className='flex items-center justify-center'>
        <PillNav
            logo='/assets/logo.png'
            logoAlt='Logo'
            items={[
                { label: 'Bridge In', href: 'sepolia' },
                { label: 'Bridge Out', href: 'polygon' },
            ]}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
            initialLoadAnimation={false}
        />
        </div>
    )
}