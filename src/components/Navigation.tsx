
const Navigation: React.FC = () => {

  return (
    <nav className="relative self-stretch flex w-full gap-5 text-white font-normal flex-wrap justify-between max-md:max-w-full">
      <div className="text-[28px] tracking-[0.28px] self-stretch">
        FurniCo
      </div>
      <div className="flex items-stretch gap-[40px_60px] text-lg max-md:max-w-full">
        <div>Furniture</div>
        <div>Shop</div>
        <div>About Us</div>
        <div>Contact</div>
      </div>
      <img
        src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/aa8eac5004f9a58b58f5baf8835be4db723f0d3b?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-[34px] shrink-0"
        alt="Menu"
      />
    </nav>
  );
};

export default Navigation;
