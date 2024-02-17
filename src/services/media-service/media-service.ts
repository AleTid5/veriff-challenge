import type { MediaContext, SessionMedia } from '@/types/session-type';
import type { MediaGroup } from './types';
import { ContextDictionary, EXPECTED_CONTEXTS } from './constants';

/**
 * Groups the media context by the detected context and
 * filters out any media that doesn't have an expected context.
 * The session context is ignored.
 * @param sessionMedia
 * @param mediaContext
 */
export const groupMedia = (
  sessionMedia: SessionMedia[],
  mediaContext: MediaContext[],
): MediaGroup => {
  return mediaContext.reduce(
    (acc, { context, mediaId, probability }) => {
      const media = sessionMedia.find(({ id }) => id === mediaId);

      if (!media || !EXPECTED_CONTEXTS.includes(context)) return acc;

      const contextKey = ContextDictionary[context];

      acc[contextKey].push({
        id: media.id,
        mimeType: media.mimeType,
        probability,
      });

      return acc;
    },
    { 'document-back': [], 'document-front': [] },
  );
};

/**
 * Sorts the media by probability in descending order.
 * @param groupedMedia
 */
export const sortByProbability = (groupedMedia: MediaGroup): MediaGroup => {
  return Object.keys(groupedMedia).reduce(
    (acc, context) => {
      acc[context] = groupedMedia[context].sort(
        (a, b) => b.probability - a.probability,
      );

      return acc;
    },
    { 'document-back': [], 'document-front': [] },
  );
};
