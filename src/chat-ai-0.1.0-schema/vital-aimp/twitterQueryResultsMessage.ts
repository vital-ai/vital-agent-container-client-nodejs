import { TwitterMessage } from './twitterMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#TwitterQueryResultsMessage
 */
export class TwitterQueryResultsMessage extends TwitterMessage {
  public countOnly?: boolean;
  public radius?: string;
  public status?: string;
  public minTimestamp?: number;
  public latitude?: number;
  public maxTimestamp?: number;
  public longitude?: number;
  public tweetIDs?: number[];
  public integerValue?: number;
  public requestType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#TwitterQueryResultsMessage';
  }

  /**
   * Get property definitions for TwitterQueryResultsMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCountOnly',
        tsPropertyName: 'countOnly',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRadius',
        tsPropertyName: 'radius',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatus',
        tsPropertyName: 'status',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMinTimestamp',
        tsPropertyName: 'minTimestamp',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLatitude',
        tsPropertyName: 'latitude',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMaxTimestamp',
        tsPropertyName: 'maxTimestamp',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLongitude',
        tsPropertyName: 'longitude',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTweetIDs',
        tsPropertyName: 'tweetIDs',
        type: 'number[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasIntegerValue',
        tsPropertyName: 'integerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRequestType',
        tsPropertyName: 'requestType',
        type: 'string',
        required: false
      }
    ];
  }


}
