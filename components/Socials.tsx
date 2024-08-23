import Link from "next/link"
import { Container } from "postcss"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const socials = [
  {
    icons: <FaGithub/>, path: "https://github.com/GauthamPrakash14",
  },
  {
    icons: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/gauthamprakash/",
  },
  {
    icons: <FaTwitter/>, path: "https://x.com/Gautham847",
  },
] 

const Socials = ({ContainerStyles, iconStyles}) => {
  return (
    <div className={ContainerStyles}>
      {socials.map((item, index) =>{
        return(
          <Link key = {index} href={item.path} target = "_blank" className={iconStyles}>
            {item.icons}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials