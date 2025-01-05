"use client";

import "./globals.scss"; // Assuming global styles are set here
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"; // Check your alias setup
import { AppSidebar } from "@/components/app-sidebar";
import { Provider } from 'react-redux';
import store from "./store/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="lg:ps-[10px] lg:py-[20px] py-0 ps-0">
        <Provider store={store}>
          <SidebarProvider>
            <AppSidebar />
            <main className="ms-[20px] w-full overflow-x-hidden">
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </Provider>
      </body>
    </html>
  );
}
