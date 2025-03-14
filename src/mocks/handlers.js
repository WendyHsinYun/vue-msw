import { http, HttpResponse } from 'msw'

const baseApiUrl = import.meta.env.BASE_URL || '/'

export const handlers = [
  http.get(baseApiUrl + 'api/classes', () => {
    return HttpResponse.json(
      [
        { id: 1, name: '基礎拳擊課', instructor: 'Terry', duration: '90分鐘' },
        { id: 2, name: '進階對打課', instructor: 'Alvin', duration: '90分鐘' },
      ],
      { headers: { 'Content-Type': 'application/json' } },
    )
  }),
]
