import styles from '../styles';
import { footerLinks, socialMedia } from '../constants';
import { logo } from '../assets';

function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col m-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] flex flex-row justify-between flex-wrap w-full md-mt-0 mt-10">
          {footerLinks.map((category) => (
            <div
              key={category.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {category.title}
              </h4>
              <ul className="list-none mt-4">
                {category.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`${
                      index === category.links.length - 1 ? 'mb-0' : 'mb-4'
                    } font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-normal text-[18px] text-center leading-[27px] text-white">
          Copyright &copy; 2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((media, index) => (
            <img
              src={media.icon}
              alt={media.id}
              key={media.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index === socialMedia.length - 1 ? 'mr-0' : 'mr-6'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
