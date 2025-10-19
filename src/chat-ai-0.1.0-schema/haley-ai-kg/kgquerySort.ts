import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGQuerySort
 */
export class KGQuerySort extends VITAL_Node {
  public kGQuerySortDirectionURI?: string;
  public kGQuerySortTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGQuerySort';
  }

  /**
   * Get property definitions for KGQuerySort
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQuerySortDirectionURI',
        tsPropertyName: 'kGQuerySortDirectionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQuerySortTypeURI',
        tsPropertyName: 'kGQuerySortTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
