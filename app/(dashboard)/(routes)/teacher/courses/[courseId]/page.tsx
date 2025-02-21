import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

type Props = {
  params: {
    courseId: string
  },
}

const CourseIdPage = async ({ params }: Props) => {

  const { userId } = await auth();

  if (!userId) {
    return redirect('/');
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId
    }
  });

  if (!course) {
    return redirect('/');
  }

  return (
    <div>
      Hello course {params.courseId}
    </div>
  )
}

export default CourseIdPage