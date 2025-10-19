import { KGSpace } from './kgspace';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGRoom
 */
export class KGRoom extends KGSpace {
  public kGRoomType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGRoom';
  }

  /**
   * Get property definitions for KGRoom
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRoomType',
        tsPropertyName: 'kGRoomType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
