import { VITAL_Node } from './vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalCollection
 */
export class VitalCollection extends VITAL_Node {
  public collectionID?: string;
  public collectionSchemaYAML?: string;
  public collectionSchemaType?: string;
  public collectionClassName?: string;
  public includesSubclasses?: boolean;
  public collectionSchemaVersion?: string;
  public collectionMultiTenant?: boolean;
  public collectionSchemaName?: string;
  public collectionNamespace?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VitalCollection';
  }

  /**
   * Get property definitions for VitalCollection
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasCollectionID',
        tsPropertyName: 'collectionID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasCollectionSchemaYAML',
        tsPropertyName: 'collectionSchemaYAML',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasCollectionSchemaType',
        tsPropertyName: 'collectionSchemaType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasCollectionClassName',
        tsPropertyName: 'collectionClassName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#isIncludesSubclasses',
        tsPropertyName: 'includesSubclasses',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasCollectionSchemaVersion',
        tsPropertyName: 'collectionSchemaVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#isCollectionMultiTenant',
        tsPropertyName: 'collectionMultiTenant',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasCollectionSchemaName',
        tsPropertyName: 'collectionSchemaName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasCollectionNamespace',
        tsPropertyName: 'collectionNamespace',
        type: 'string',
        required: false
      }
    ];
  }


}
