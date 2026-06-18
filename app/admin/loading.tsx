import { Loader2 } from 'lucide-react';

export default function AdminLoading() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-10 h-10 text-brand-yellow animate-spin" />
        <p className="text-gray-500 font-medium animate-pulse">Carregando painel...</p>
      </div>
    </div>
  );
}
