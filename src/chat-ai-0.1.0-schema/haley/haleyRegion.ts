import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyRegion
 */
export class HaleyRegion extends VITAL_Node {
  public centroidLatitude?: number;
  public recentRegionPopulationYear?: number;
  public recentRegionPopulation?: number;
  public centroidLongitude?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyRegion';
  }

  /**
   * Get property definitions for HaleyRegion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCentroidLatitude',
        tsPropertyName: 'centroidLatitude',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRecentRegionPopulationYear',
        tsPropertyName: 'recentRegionPopulationYear',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRecentRegionPopulation',
        tsPropertyName: 'recentRegionPopulation',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCentroidLongitude',
        tsPropertyName: 'centroidLongitude',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
