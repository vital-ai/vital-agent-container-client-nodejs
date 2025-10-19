import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyQuerySort
 */
export class HaleyQuerySort extends VITAL_Node {
  public querySortOrder?: number;
  public querySortTypeURI?: string;
  public querySortDirectionURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyQuerySort';
  }

  /**
   * Get property definitions for HaleyQuerySort
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuerySortOrder',
        tsPropertyName: 'querySortOrder',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuerySortTypeURI',
        tsPropertyName: 'querySortTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuerySortDirectionURI',
        tsPropertyName: 'querySortDirectionURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
