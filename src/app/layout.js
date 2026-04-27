// import dns from "node:dns";
//dns.setServers(['8.8.8.8', '8.8.4.4']);



import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";




const poppins = Poppins({

  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400" ,"500", "600", "700"]
})

export const montserrat = Montserrat({

  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400" ,"500", "600", "700"]
})

export const metadata = {
  title: "Dragon news",
  description: "Best news portal in bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        
        
        
        {children}
        <ToastContainer />
        </body>

        
    </html>
  );
}
