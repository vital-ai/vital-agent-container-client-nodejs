import { Document } from '../vital-nlp/document';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#Tweet
 */
export class Tweet extends Document {
  public favoriteCount?: number;
  public authorScreenName?: string;
  public authorID?: number;
  public originalAuthorID?: number;
  public tweetStatus?: string;
  public authorName?: string;
  public twitterLongitude?: number;
  public originalAuthorScreenName?: string;
  public inReplyToScreenName?: string;
  public inReplyToTweetID?: number;
  public retweet?: boolean;
  public originalAuthorName?: string;
  public inReplyToUserID?: number;
  public tweetID?: number;
  public retweetCount?: number;
  public twitterLatitude?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#Tweet';
  }

  /**
   * Get property definitions for Tweet
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFavoriteCount',
        tsPropertyName: 'favoriteCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasAuthorScreenName',
        tsPropertyName: 'authorScreenName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasAuthorID',
        tsPropertyName: 'authorID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasOriginalAuthorID',
        tsPropertyName: 'originalAuthorID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTweetStatus',
        tsPropertyName: 'tweetStatus',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasAuthorName',
        tsPropertyName: 'authorName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTwitterLongitude',
        tsPropertyName: 'twitterLongitude',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasOriginalAuthorScreenName',
        tsPropertyName: 'originalAuthorScreenName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasInReplyToScreenName',
        tsPropertyName: 'inReplyToScreenName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasInReplyToTweetID',
        tsPropertyName: 'inReplyToTweetID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#isRetweet',
        tsPropertyName: 'retweet',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasOriginalAuthorName',
        tsPropertyName: 'originalAuthorName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasInReplyToUserID',
        tsPropertyName: 'inReplyToUserID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTweetID',
        tsPropertyName: 'tweetID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasRetweetCount',
        tsPropertyName: 'retweetCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTwitterLatitude',
        tsPropertyName: 'twitterLatitude',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
