import { ManagePostForm } from '@/components/admin/ManagePostForm';

export const dynamic = 'force-static';

export default async function AdminPostNewPage() {
  return <ManagePostForm />;
}
