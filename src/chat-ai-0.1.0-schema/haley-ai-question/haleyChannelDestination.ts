import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyChannelDestination
 */
export class HaleyChannelDestination extends VITAL_Node {
  public channelDestinationBotName?: string;
  public haleyChannelTypeURI?: string;
  public channelDestinationChannelName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyChannelDestination';
  }

  /**
   * Get property definitions for HaleyChannelDestination
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasChannelDestinationBotName',
        tsPropertyName: 'channelDestinationBotName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyChannelTypeURI',
        tsPropertyName: 'haleyChannelTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasChannelDestinationChannelName',
        tsPropertyName: 'channelDestinationChannelName',
        type: 'string',
        required: false
      }
    ];
  }


}
