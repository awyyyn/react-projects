 

export interface exercise {
    bodyPart: string
    equipment: string
    gifUrl: string
    id: string
    name: string
    target: string
}

export interface SearchNotFoundProps {
    children: React.ReactNode
    isLoading?: boolean
}
 
export interface videos {
    type: string
    video: video
}

export interface video {
    author: {
        avatar: image[]
        badges: badge[]
        canonicalBaseUrl: string
        channelId: string
        title: string
    }
    badges?: badge[]
    descriptionSnippet: string
    isLiveNow: boolean
    lengthSeconds: number
    movingThumbnails: image[]
    publishedTimeText: string
    stats: {
        views: number
    }
    thumbnails: image[]
    videoId: string
}
 
 

interface image {
    height: number
    width: number
    url: string
}

interface badge {
    type: string
    text: string
}