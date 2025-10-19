import { VITAL_GraphContainerObject } from '../vital-core/vitalGraphcontainerobject';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#KGModelQuotaMap
 */
export class KGModelQuotaMap extends VITAL_GraphContainerObject {
  public haleyChatMessageURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#KGModelQuotaMap';
  }

  /**
   * Get property definitions for KGModelQuotaMap
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatMessageURI',
        tsPropertyName: 'haleyChatMessageURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
