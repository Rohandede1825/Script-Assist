import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // ⚠️ ALREADY HERE
import App from "./App";

import { QueryClient,  QueryClientProvider } from "@tanstack/react-query";

  const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(

    <QueryClientProvider client={queryClient}>

    <BrowserRouter>  
      <App />
    </BrowserRouter>
    </QueryClientProvider>
 
);
