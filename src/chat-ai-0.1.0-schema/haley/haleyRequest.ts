import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyRequest
 */
export class HaleyRequest extends VITAL_Node {
  public requestOriginMessageSerialized?: string;
  public requestChannelHistory?: string;
  public requestMessageSerialized?: string;
  public accountURI?: string;
  public responseChannelURI?: string;
  public requestOriginMessageResponseSerialized?: string;
  public channelURI?: string;
  public requestURI?: string;
  public requestResponseTypeURI?: string;
  public requestMessageResponseSerialized?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyRequest';
  }

  /**
   * Get property definitions for HaleyRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRequestOriginMessageSerialized',
        tsPropertyName: 'requestOriginMessageSerialized',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRequestChannelHistory',
        tsPropertyName: 'requestChannelHistory',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRequestMessageSerialized',
        tsPropertyName: 'requestMessageSerialized',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasResponseChannelURI',
        tsPropertyName: 'responseChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRequestOriginMessageResponseSerialized',
        tsPropertyName: 'requestOriginMessageResponseSerialized',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChannelURI',
        tsPropertyName: 'channelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRequestURI',
        tsPropertyName: 'requestURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRequestResponseTypeURI',
        tsPropertyName: 'requestResponseTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRequestMessageResponseSerialized',
        tsPropertyName: 'requestMessageResponseSerialized',
        type: 'string',
        required: false
      }
    ];
  }


}
