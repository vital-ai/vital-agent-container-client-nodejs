import { DatabaseConnection } from './databaseConnection';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#SqlDatabaseConnection
 */
export class SqlDatabaseConnection extends DatabaseConnection {
  public database?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#SqlDatabaseConnection';
  }

  /**
   * Get property definitions for SqlDatabaseConnection
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasDatabase',
        tsPropertyName: 'database',
        type: 'string',
        required: false
      }
    ];
  }


}
