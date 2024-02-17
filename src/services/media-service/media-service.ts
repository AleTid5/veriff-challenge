import { MediaContext, SessionMedia } from '@/types/session-type';
import { MediaGroup } from './types';
import { ContextDictionary, EXPECTED_CONTEXTS } from './constants';

/**
 * Finds the media context for each session and groups them by context,
 * filtering out any media that doesn't have an expected context.
 * @param sessionMedia
 * @param mediaContext
 */
export const groupMedia = (
  sessionMedia: SessionMedia[],
  mediaContext: MediaContext[],
): MediaGroup => {
  return mediaContext.reduce(
    (acc, { context, mediaId, probability }) => {
      const { id, mimeType } = sessionMedia.find(({ id }) => id === mediaId)!;

      if (!EXPECTED_CONTEXTS.includes(context)) return acc;

      const contextKey = ContextDictionary[context];

      acc[contextKey].push({
        id,
        mimeType,
        context: contextKey,
        probability,
      });

      return acc;
    },
    { 'document-back': [], 'document-front': [] },
  );
};

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
