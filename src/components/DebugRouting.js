// components/DebugRouting.js - Add this temporarily to debug routing issues
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function DebugRouting() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs max-w-sm z-50">
      <h4 className="font-bold mb-2">🐛 Debug Info:</h4>
      <div className="space-y-1">
        <div><strong>Route:</strong> {router.route}</div>
        <div><strong>AsPath:</strong> {router.asPath}</div>
        <div><strong>Query:</strong> {JSON.stringify(router.query)}</div>
        <div><strong>Ready:</strong> {router.isReady ? '✅' : '❌'}</div>
        <div><strong>Pathname:</strong> {router.pathname}</div>
      </div>
      <button 
        onClick={() => {
          document.querySelector('[data-debug]')?.remove();
        }}
        className="mt-2 bg-red-600 px-2 py-1 rounded text-xs"
      >
        Close
      </button>
    </div>
  );
}

// Add this to your _app.js temporarily:
/*
import DebugRouting from '../components/DebugRouting';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {process.env.NODE_ENV === 'development' && <DebugRouting />}
    </>
  );
}
*/