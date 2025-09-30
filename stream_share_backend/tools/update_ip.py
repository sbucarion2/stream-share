import sqlite3


def get_videos():

    conn = sqlite3.connect(r"C:\Users\sbuca\Desktop\2025-projects\stream-share\stream_share_backend\db.sqlite3")
    cursor = conn.cursor()

    query = """
        SELECT id, thumbnail_location, video_location
        FROM get_video_videos
    """

    result = cursor.execute(query)
    result = result.fetchall()

    cursor.close()
    conn.close()

    return result


def replace_ip(videos):

    old_ip = "192.168.1.224"
    new_ip = "192.168.1.152"

    updated_videos = []
    for video_id, thumbnail_location, video_location in videos:

        new_thumbnail_location = thumbnail_location.replace(old_ip, new_ip)
        new_video_location = video_location.replace(old_ip, new_ip)

        updated_videos.append(
            (
                video_id,
                new_thumbnail_location,
                new_video_location
            )
        )

    return updated_videos


def update_video_paths(video_paths):

    conn = sqlite3.connect(r"C:\Users\sbuca\Desktop\2025-projects\stream-share\stream_share_backend\db.sqlite3")
    cursor = conn.cursor()

    for video_id, thumbnail_location, video_location in video_paths:

        cursor.execute(
            """
                UPDATE get_video_videos
                SET
                    thumbnail_location = '{}',
                    video_location = '{}'
                WHERE id = '{}'
            """.format(thumbnail_location, video_location, video_id)
        )

        conn.commit()

    cursor.close()
    conn.close()


def main():

    video_paths = get_videos()
    new_video_paths = replace_ip(video_paths)
    update_video_paths(new_video_paths)

main()
