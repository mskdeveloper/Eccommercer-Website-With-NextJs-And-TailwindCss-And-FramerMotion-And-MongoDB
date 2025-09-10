import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ReduxProvider from "@/components/reduxProvider";

export const metadata = {
  title: "Darica | Electronic Shop",
  description: "Electronic Shop From Bushehr",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
