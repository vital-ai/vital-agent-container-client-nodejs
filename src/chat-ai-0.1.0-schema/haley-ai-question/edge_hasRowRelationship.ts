import { Edge_hasRow } from './edge_hasRow';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasRowRelationship
 */
export class Edge_hasRowRelationship extends Edge_hasRow {
  public rowRelationshipArity?: number;
  public rowRelationshipType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#Edge_hasRowRelationship';
  }

  /**
   * Get property definitions for Edge_hasRowRelationship
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasRowRelationshipArity',
        tsPropertyName: 'rowRelationshipArity',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasRowRelationshipType',
        tsPropertyName: 'rowRelationshipType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasRowRelationship
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasRowRelationship';
  }
}
