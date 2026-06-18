import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-12 h-12 text-brand-yellow animate-spin" />
        <p className="text-gray-600 font-medium animate-pulse">Carregando...</p>
      </div>
    </div>
  );
}
