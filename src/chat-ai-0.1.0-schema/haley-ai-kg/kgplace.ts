import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGPlace
 */
export class KGPlace extends KGNode {
  public haleyRegionURI?: string;
  public kGPlaceIdentifier?: string;
  public kGPlaceJSON?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGPlace';
  }

  /**
   * Get property definitions for KGPlace
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasHaleyRegionURI',
        tsPropertyName: 'haleyRegionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPlaceIdentifier',
        tsPropertyName: 'kGPlaceIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPlaceJSON',
        tsPropertyName: 'kGPlaceJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
